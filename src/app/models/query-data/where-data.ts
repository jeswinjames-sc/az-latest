export interface WhereData {
    fieldName: string;
    operation: 'equal' | 'greaterThan' | 'greaterThanEqual' | 'lessThan' | 'lessThanEqual' | 'notEqual';
    compareValue: string | number;
    logicalOperator?: 'AND' | 'OR';
}
