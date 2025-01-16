export interface JarFields {
  data: {
    [key: string]: {
      defaultValue: string
      inputType: string;
      isEditable: boolean;
      isVisible: boolean;
      label: string;
      listOfValues: Array<object>;
      max: string;
      min: string
    }
  }
}