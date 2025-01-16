/**
 * @author Garfunkel.Vila
 */

export interface IAccountManagerResponseItem {
  eClass: string
  self: string,
  firstName: string
  middleName: string
  name: string
  alias?: string
  image?: string
  contactChannels: IAccountManagerContactChannel
  agentNumber: string
  accountManagerCategory: string
  branchList: object
  address: IAccountManagerAddress
  accountManagerGender?: String | "MALE" | "FEMALE"
  accountManagerType: String
  userAgreement: Boolean
  license?: ILicense
}

export interface IAccountManagerContactChannel {
  phoneNumber: string
  email: string
  mailingAddress: string
}
export interface IAccountManagerAddress {
  self: string
  buildingName?: string
  streetNumber?: string
  street?: string
  district?: string
  cityCode?: string
  state?: string
  zipCode?: string
  countryCode?: string
  type?: string | "HOME"
}

export interface ILicense {
  employmentDate: String,
  employmentStatus: String | "Active",
  certificateNumber?: any,
  certificateStatus?: any,
  identificationDocuments: IIdentificationDocument[]
}

export interface IIdentificationDocument {
  eClass: string
  categories: IIdentificationDocumentCategories[],
  number?: string | null,
  status: string,
  issuingDate: string //"2018-01-09T00:00:00.000",
  validityInterval?: any | null
}

export interface IValidityInterval {
  eClass: string
  startDateTime: string
  endDateTime: string
}

export type IIdentificationDocumentCategories = string | "Traditional" | "Variable"