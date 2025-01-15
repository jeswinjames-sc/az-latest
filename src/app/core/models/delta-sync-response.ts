export class DeltaSyncResponse{
  moduleId?: any;
  module: string;
  statusCode?: any = null; //response code
  error?: any = null;
  syncStatus?: any;
  documentType?: string;
  timestamp: number;
}