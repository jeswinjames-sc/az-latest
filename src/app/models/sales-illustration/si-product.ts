import { BaseProduct } from './base-product';

export interface SIProduct {
  siId: string;
  irpqId: string;
  title: string;
  description: string;
  category: string;
  product: BaseProduct;
}