import { BaseCardInfo } from '@models/base-card-info';
import { ButtonSpecs } from '@models/specs/button-specs';
import { SIProduct } from '@models/sales-illustration/si-product';
export interface CardListingSpecs {
  cardInfo?: Array<BaseCardInfo>;
  btnSpecs?: Array<ButtonSpecs>;
  popoverSpecs?: Array<ButtonSpecs>;
  siProduct?: SIProduct;
}
