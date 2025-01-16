export interface BaseProduct {
  code: string;
  descItemized: Array<string>;
  description: string;
  isAvailable: boolean;
  isEnabled: boolean;
  planCode: string;
  planTypeCd: string;
  planVersion: string;
  title: string;
  toolTipText: string;
  category?: string;
  siId?: string;
}