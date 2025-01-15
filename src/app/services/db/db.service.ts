import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Storage } from '@ionic/storage';
import { QueryData } from '@models/query-data/query-data';
import { WhereData } from '@models/query-data/where-data';
import { OrderByData } from '@models/query-data/order-by-data';

import { SETTING_KEYS } from '@utils/constants/setting-keys';
import { CONSTANT_NUMBERS } from '@utils/constants/constant-numbers';
import { WS_QUESTION_CODE_MAPPER } from '@utils/constants/mapper/ws-question-code-mapper';
import { MIGRATION_SCRIPTS } from '@utils/database/migration-scripts';
import { ISQL_data } from '@core/services/agila-firebase/interfaces/agila-firebase-interfaces';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db: SQLiteDBConnection | null = null;
  private database!: SQLiteDBConnection;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private readonly dbVersion = 26;

  private getReturnData = {
    returncode: '',
    returnMessage: '',
    res: null as any
  };

  private readonly operationMapping = {
    equal: '=',
    notEqual: '<>',
    lessThan: '<',
    lessThanEqual: '<=',
    greaterThan: '>',
    greaterThanEqual: '>='
  } as const;

  constructor(

    private sqlite: SQLiteConnection,
    private storage: Storage,
    private httpClient: HttpClient,
  ) {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
    this.initializeDB();
  }

  async initializeDB() {
    try {
      this.db = await this.sqlite.createConnection(
        'agila.db',
        false,
        'no-encryption',
        1,
        false
      );
      const databaseFilled = await this.storage.get('database_filled');

      if (databaseFilled) {
        const oldDBVersion = await this.storage.get(SETTING_KEYS.DB_VERSION);
        if (this.dbVersion > oldDBVersion) {
          await this.onUpdate(oldDBVersion);
        } else {
          this.dbReady.next(true);
        }
      } else {
        await this.storage.set(SETTING_KEYS.DB_VERSION, this.dbVersion);
        await this.onCreate();
      }
    } catch (error) {
      console.error('Error setting up database:', error);
      throw error;
    }
  }

  getDatabaseState(): Observable<boolean> {
    return this.dbReady.asObservable();
  }

  getDBInstance(): SQLiteDBConnection | null {
    return this.db;
  }

  private async onCreate(): Promise<void> {
    try {
      // Ensure database connection exists
      if (!this.db) {
        this.db = await this.sqlite.createConnection(
          'agila.db',
          false,
          'no-encryption',
          1,
          false
        );
        await this.db.open();
      }

      // Get SQL content from assets
      const sql = await firstValueFrom(
        this.httpClient.get(
          `assets/journey_v${this.dbVersion}.sql`,
          { responseType: 'text' }
        )
      );

      // Execute SQL statements
      await this.db.execute(sql);

      // Update storage settings
      await this.storage.set(SETTING_KEYS.DB_VERSION, this.dbVersion);
      await this.storage.set('database_filled', true);

      // Notify that database is ready
      this.dbReady.next(true);
    } catch (error) {
      console.error('Error creating database:', error);
      throw error;
    }
  }

  private async onUpdate(oldVersion: number): Promise<void> {
    try {
      // Ensure database connection exists
      if (!this.db) {
        this.db = await this.sqlite.createConnection(
          'agila.db',
          false,
          'no-encryption',
          1,
          false
        );
        await this.db.open();
      }

      // Begin transaction
      await this.db.execute('BEGIN TRANSACTION');

      try {
        // Execute migration script
        await this.db.execute((MIGRATION_SCRIPTS as any)[`V${oldVersion + 1}`]);

        const newVersion = oldVersion + 1;
        await this.storage.set(SETTING_KEYS.DB_VERSION, newVersion);

        // Commit transaction
        await this.db.execute('COMMIT');

        // Check if more updates needed
        if (this.dbVersion > newVersion) {
          await this.onUpdate(newVersion);
        } else {
          this.dbReady.next(true);
        }

      } catch (error) {
        // Rollback on error
        await this.db.execute('ROLLBACK');

        // Handle special migration cases
        const oldDbVersion = await this.storage.get(SETTING_KEYS.DB_VERSION);

        if (oldDbVersion === this.dbVersion - 1 && [10, 20].includes(this.dbVersion)) {
          await this.storage.set(SETTING_KEYS.DB_VERSION, oldDbVersion + 1);
          this.dbReady.next(true);
          return;
        }

        throw error;
      }

    } catch (error) {
      console.error('Error updating database:', error);
      throw error;
    }
  }

  async getAllTableData(
    table: string,
    whereData: WhereData[] = [],
    orderByData: OrderByData[] = []
  ): Promise<any> {
    const queryInterpolationValue: (string | number)[] = [];
    const queryData: QueryData = {
      type: 'select',
      whereData,
      orderByData
    };

    const generatedQueryData = this.queryGen(table, queryData, queryInterpolationValue);
    return this.database.query(generatedQueryData.query, generatedQueryData.queryInterpolationValue);
  }

  async insertTableData(
    table: string,
    insertFieldNames: string[],
    insertValues: (string | number)[]
  ): Promise<any> {
    const queryData: QueryData = {
      type: 'insert',
      dataChangeFieldNames: insertFieldNames
    };
    const generatedQueryData = this.queryGen(table, queryData);
    return await this.database.run(generatedQueryData.query, insertValues);
  }

  async updateTableData(
    table: string,
    updateFieldNames: string[],
    updateValues: (string | number)[],
    whereData: WhereData[] = []
  ): Promise<any> {
    const queryData: QueryData = {
      type: 'update',
      dataChangeFieldNames: updateFieldNames,
      whereData
    };
    const generatedQueryData = this.queryGen(table, queryData);
    return await this.database.run(generatedQueryData.query, updateValues.concat(generatedQueryData.queryInterpolationValue));
  }

  async deleteTableData(
    table: string,
    fieldName?: string,
    params?: any[]
  ): Promise<any> {
    if (!fieldName) {
      return;
    }

    const describeQuery = `PRAGMA table_info(${table})`;
    const describeResult = await this.database.query(describeQuery, []);

    // Check if field exists in the results
    const fieldExists = describeResult.values?.some(row =>
      row.name?.toLowerCase() === fieldName?.toLowerCase()
    ) || false;

    if (!fieldExists) {
      return;
    }

    const query = `DELETE FROM ${table} WHERE ${fieldName} = ?`;
    return await this.database.run(query, params);
  }

  async truncateTable(table: string): Promise<any> {
    const query = `DELETE FROM ${table}`;
    return await this.database.run(query, []);
  }

  async manualQueryRun(query: string, params: any[]): Promise<any> {
    return await this.database.query(query, params);
  }

  private queryGen(
    table: string,
    queryData: QueryData,
    queryInterpolationValue: (string | number)[] = []
  ): { query: string; queryInterpolationValue: (string | number)[] } {
    let query = '';

    switch (queryData.type) {
      case 'select':
        query = `SELECT * FROM ${table}`;
        break;
      case 'update':
        const updateStrings = this.queryFieldsHelper(queryData.dataChangeFieldNames!);
        query = `UPDATE ${table} SET ${updateStrings.fieldNamesString} = ${updateStrings.valueInterpolationString}`;
        break;
      case 'insert':
        const insertStrings = this.queryFieldsHelper(queryData.dataChangeFieldNames!);
        query = `INSERT or REPLACE INTO ${table} ${insertStrings.fieldNamesString} VALUES ${insertStrings.valueInterpolationString}`;
        break;
    }

    if (queryData.type === 'select' || queryData.type === 'update') {
      if (queryData.whereData?.length) {
        query = this.appendWhereClause(query, queryData.whereData, queryInterpolationValue);
      }
      if (queryData.orderByData?.length) {
        query = this.appendOrderByClause(query, queryData.orderByData);
      }
    }

    return { query, queryInterpolationValue };
  }

  private appendWhereClause(
    query: string,
    whereData: WhereData[],
    queryInterpolationValue: (string | number)[]
  ): string {
    whereData.forEach((data, index) => {
      query += index === 0 ? ' WHERE' : '';
      query += ` ${data.fieldName} ${this.operationMapping[data.operation]} ?`;
      query += index < whereData.length - 1 ? ` ${data.logicalOperator}` : '';
      queryInterpolationValue.push(data.compareValue);
    });
    return query;
  }

  private appendOrderByClause(query: string, orderByData: OrderByData[]): string {
    orderByData.forEach((data, index) => {
      query += index === 0 ? ' ORDER BY' : '';
      query += ` ${data.fieldName} ${data.direction || ''}`;
      query += index < orderByData.length - 1 ? ',' : '';
    });
    return query;
  }

  private queryFieldsHelper(fieldNames: string[]): {
    fieldNamesString: string;
    valueInterpolationString: string;
  } {
    const fieldNamesString = `(${fieldNames.join(', ')})`;
    const valueInterpolationString = `(${fieldNames.map(() => '?').join(', ')})`;
    return { fieldNamesString, valueInterpolationString };
  }

  sqlHelperParamGen(
    fieldDefs: Array<{
      fieldName: string;
      value?: string | number;
      formGroupControlName?: string;
    }>,
    formgroup?: FormGroup
  ): { fields: string[]; interpolationValues: any[] } {
    const fields: string[] = [];
    const interpolationValues: any[] = [];
    const formgroupRawValue = formgroup?.getRawValue();

    fieldDefs.forEach(fieldDef => {
      if (fieldDef.value !== undefined) {
        fields.push(fieldDef.fieldName);
        interpolationValues.push(fieldDef.value);
      }
      if (fieldDef.formGroupControlName && formgroupRawValue?.[fieldDef.formGroupControlName] !== undefined) {
        fields.push(fieldDef.fieldName);
        interpolationValues.push(formgroupRawValue[fieldDef.formGroupControlName]);
      }
    });

    return { fields, interpolationValues };
  }
}
