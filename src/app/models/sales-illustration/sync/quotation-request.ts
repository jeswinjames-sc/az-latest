import { questionsObject } from '@models/irpq/irpq-questions';
import { Quotations } from './quotation';

export class QuotationRequest{
    quotations ?: Quotations[];
}

export class QuotationRequestV2{
    syncData ?: Quotations[];
    resource ?: any;
}