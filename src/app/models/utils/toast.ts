interface ToastButton {
  text?: string;
  icon?: string;
  side?: 'start' | 'end';
  role?: 'cancel' | string;
  cssClass?: string | string[];
  handler?: () => boolean | void | Promise<boolean | void>;
}

export interface Toast {
  present?(): Promise<void>;
  message?: string;
  animated?: boolean;
  color?: string;
  position: 'bottom' | 'middle' | 'top';
  showCloseButton?: boolean;
  cssClass?: string | string[];
  duration?: number;
  buttons?: (ToastButton | string)[];
}