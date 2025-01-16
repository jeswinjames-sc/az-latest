import { IRouter } from './router';

export interface BackNavigation {
  isPopState: boolean;
  displayMenu: boolean;
  isLocationBack?: boolean;
  route?: IRouter;
  module?: string;
  customMessage?: string;
  isModalDismiss?: boolean;
}
