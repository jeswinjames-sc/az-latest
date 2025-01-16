import { QuotationData, QuotationDataV2 } from './quotation-data';

export class Quotations{
    data ?: QuotationData;
    isDeleted ?: any;
    lastUpdateDate ?: any;
    createdDate ?: any;
    clientRefId ?: any;
    clientLeadRefId ?: any;
}

export class QuotationsV2{
    data ?: QuotationDataV2;
    resource? : any;
    accountManager ?: any;
    syncStatus?: any;
    pagination?: any;
    errors?: any;
}