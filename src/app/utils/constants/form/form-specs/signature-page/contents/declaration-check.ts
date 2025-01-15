import {FormGroup} from '@angular/forms';
import {ColumnGeneratorSpecs} from '@models/specs/column-generator-specs';

export function declarationCheck(attributeName: string, fg: FormGroup): ColumnGeneratorSpecs {
  const authorization: ColumnGeneratorSpecs =  {
    field : {
      setFieldName: false,
      attName: attributeName,
      fieldName: attributeName === `salesIllustrationCheckBuss` ? 
        `I AGREE AND DECLARE THAT THE INFORMATION AND STATEMENTS ARE TRUE AND ACCURATE, AND THAT THESE SHALL BE THE BASIS OF THE CONTRACT TO BE ISSUED.  I UNDERSTAND THAT I WILL NOT BE ABLE TO MAKE A CLAIM IF I MISREPRESENT, CONCEAL OR FAIL TO DISCLOSE MATERIAL INFORMATION IN THIS APPLICATION.` : 
        `I have read and understood...`,
      type: 'checkbox',
      formGroup: fg
    }
  };
  return authorization;
}


export function declarationCheckAFC(attributeName: string, fg: FormGroup): ColumnGeneratorSpecs {
  const authorization: ColumnGeneratorSpecs =  {
    field : {
      setFieldName: false,
      attName: attributeName,
      fieldName: attributeName === `salesIllustrationCheckBuss` ? 
        `I AGREE AND DECLARE THAT THE INFORMATION AND STATEMENTS ARE TRUE AND ACCURATE, AND THAT THESE SHALL BE THE BASIS OF THE CONTRACT TO BE ISSUED.  I UNDERSTAND THAT I WILL NOT BE ABLE TO MAKE A CLAIM IF I MISREPRESENT, CONCEAL OR FAIL TO DISCLOSE MATERIAL INFORMATION IN THIS APPLICATION.` : 
        `I have read and understood...`,
      type: 'checkbox',
      formGroup: fg
    }
  };
  return authorization;
}

