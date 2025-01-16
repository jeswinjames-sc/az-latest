import { ColSpecs } from '@models/specs/col-specs';
export interface ButtonSpecs extends ColSpecs {
  title?: string;
  method?: string;
  param?: any;
  color?: string;
  expand?: string;
  fill?: 'clear'|'outline'|'solid';
  shape?: string;
  btnSize?: string;
  slot?: string;
  type?: string;
  disabled?: boolean;
  icon?: string;
  isPopover?: boolean;
  function?: any;
}
