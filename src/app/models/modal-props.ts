import { FormGeneratorSpecs } from "./specs/form-generator-specs";

export interface ModalProps {
    type: 'image' | 'text' | 'settings' | 'si-product'| 'password' | 'table' | 'devConfig' | 'estate';
    forms?: FormGeneratorSpecs;
    imgSrc?: string;
    data?: any;
}
