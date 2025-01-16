export interface BaseCountries {
  name: string;
  countryCode: string;
  stateId?: string;
  cityCode?: string;
  zipCode?: string;
  states?: Array<{}>
  cities?: Array<{}>;
  zipCodes?: Array<{}>;
}