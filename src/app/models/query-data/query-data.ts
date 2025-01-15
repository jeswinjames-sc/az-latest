import { WhereData } from './where-data';
import { OrderByData } from './order-by-data';

export interface QueryData {
    type: 'select' | 'update' | 'insert';
    dataChangeFieldNames?: string[];
    whereData?: WhereData[];
    orderByData?: OrderByData[];
}
