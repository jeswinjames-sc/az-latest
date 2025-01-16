/**
 * @author Garfunkel.Vila
 */

import { IAccountManagerAddress, IAccountManagerContactChannel, IAccountManagerResponseItem, IIdentificationDocument, ILicense, IValidityInterval } from "./types";
import { parsePlanTypeToString, PLAN_TYPE } from "@utils/enums/plan-type";
import { Moment } from 'moment';
import { isNullOrUndefined } from "util";

export class AccountManagerResponseItem implements IAccountManagerResponseItem {
    eClass: string;
    self: string;
    firstName: string;
    middleName: string;
    name: string;
    alias?: string;
    image?: string;
    contactChannels: IAccountManagerContactChannel;
    agentNumber: string;
    accountManagerCategory: string;
    branchList: object;
    address: IAccountManagerAddress;
    accountManagerGender?: String | 'MALE' | 'FEMALE';
    accountManagerType: String;
    userAgreement: Boolean;
    license?: ILicense;
  
    constructor(_obj: IAccountManagerResponseItem) {
      this.eClass = _obj.eClass
      this.self = _obj.self
      this.firstName = _obj.firstName
      this.middleName = _obj.middleName
      this.name = _obj.name
      this.alias = _obj.alias
      this.image = _obj.image
      this.contactChannels = _obj.contactChannels
      this.agentNumber = _obj.agentNumber
      this.accountManagerCategory = _obj.accountManagerCategory
      this.branchList = _obj.branchList
      this.address = _obj.address
      this.accountManagerGender = _obj.accountManagerGender
      this.accountManagerType = _obj.accountManagerType
      this.userAgreement = _obj.userAgreement
      this.license = _obj.license
    }
  
    /**
     * @returns Returns an array of PLAN_TYPE the
     * This will not include items without identificationDocument
     */
    get _shortLicenses (): PLAN_TYPE[] {
      // I am not sure why category is an array with a signle value
      // Might ask someone if this is expected to have duplicate with other document
      if (isNullOrUndefined(this.license)) return null
      if (this.IdentificationDocuments == null) return null
      let _buffer: PLAN_TYPE[] = []
  
      this.license.identificationDocuments.forEach((identificationDocument) => {
        identificationDocument.categories.forEach((e) => {
          switch (e) {
            case "Traditional":
              _buffer.push(PLAN_TYPE.TRAD)
              break
            case "Variable":
              _buffer.push(PLAN_TYPE.UL)
              break
            // default:
            //   _buffer.push(e)
            //   break
          }
        })
      })
      return _buffer // This can have duplicates
    }
  
    /**
     * Just a copy of IdentificationDocuments
     */
    get availableLicenses(): IdentificationDocument[] { return this.IdentificationDocuments }

    /**
     * @returns Identification Document
     */
    get IdentificationDocuments(): IdentificationDocument[] {
      if (this.license == null) return null
      if (this.license.identificationDocuments == null) return null
      return this.license.identificationDocuments.map((e) => {
        return new IdentificationDocument(e)
      })
    }

    /**
     * 
     * @param e 
     * @returns Returns true if grace period for license if greater than zero
     */
    public hasValidLicenseForPlanTypeShort (e: PLAN_TYPE) : boolean {
      return this.getLicenseGracePeriodForPlanTypeShort(e) > 0
    }
  
    /**
     * This function mught use large resource since it is using the grace period and that is using moment.js
     * Maybe there is a better way.
     * This thing loops through Identification documents
     * @returns Returns true if the user has any license
     * @author Garfunkel.Vila
     */
    get hasAnyValidLicense () : boolean {
      if (this.license == null) return false
      if (this.license.identificationDocuments == null) return false
      let licenseCounter = 0
      this.IdentificationDocuments.forEach((e) => {
        licenseCounter += e.gracePeriod > 0 ? 1 : 0
      })
      return licenseCounter > 0
    }

    /**
     * This function only gets the first category to calculate grace period.
     * Grace period of zero is unlicensed
     * @param planTypeCd 
     * @returns 
     */
    public getLicenseGracePeriodForPlanTypeShort (planTypeCd: PLAN_TYPE) : number {
      // return 5
      if (this.availableLicenses == null) return 0
      const buffer = this.availableLicenses.filter((e) => {
        switch (e.categories[0]) {
          case "Variable":
            return planTypeCd == PLAN_TYPE.UL
          case "Traditional":
            return planTypeCd == PLAN_TYPE.TRAD
          default:
            return false
        }
      })
      if (buffer.length == 0) return 0
      return buffer[0].gracePeriod
    }

  /**
   * Directly get the identidication document using PLAN_TYPE
   * @param planTypeCd 
   * @returns 
   */
    public getIdentificationDocumentByPlanType (planTypeCd: PLAN_TYPE) : IdentificationDocument {
      if (this.license == null) return null
      if (this.IdentificationDocuments == null) return null
      return this.IdentificationDocuments.find((e) => {
        return e.categories[0] == parsePlanTypeToString(planTypeCd)
      })
    }

    /**
     * Returns true if all values inside IdentificationDocuments related to license are valid
     * Will also return false if the passed license does not exist on user
     * @param planTypeCd 
     * @returns 
     */
    public checkLicenseValueValidity (planTypeCd: PLAN_TYPE) : Boolean {
      if (this.IdentificationDocuments == null) return false
      let license: IdentificationDocument = this.IdentificationDocuments.find((e) => {
        return e.categories[0] == parsePlanTypeToString(planTypeCd)
      })
      if (license == undefined) return false
      if (license.isValidityIntervalMissing) return false
      if (license.isEndDateTimeMissing) return false
      if (license.isIssueOrExpiryDateMissing) return false

      return true
    }
  }
  
  /**
   * @author Garfunkel.Vila
   */
  export class IdentificationDocument implements IIdentificationDocument {
    eClass: string;
    categories: string[];
    number?: string;
    status: string;
    issuingDate: string; //"2018-01-09T00:00:00.000" Assume ko is ISO
    validityInterval?: IValidityInterval;
  
    constructor(obj: IIdentificationDocument) {
      this.eClass = obj.eClass
      this.categories = obj.categories
      this.number = obj.number
      this.status = obj.status
      this.issuingDate = obj.issuingDate
      this.validityInterval = obj.validityInterval
    }
  
    get _issuingDate(): Moment {
      const moment = require('moment')
      return moment(this.issuingDate)
    }
  
    // Might rename this
    // Currently end date is still a valid license
    get gracePeriod(): number {
      if (this.validityInterval == null) return -1 // Treat users with Identification Document but no validity interval as UNLICENSED
      if (this.validityInterval.endDateTime == null) return 99 // Treat users with Identification Document and has validity interval but no end date as licensed
      const moment = require('moment')
      let _issuingDate: Moment = moment(this.issuingDate) //"2018-01-09T00:00:00.000" Assume ko is ISO
      let _validityInterval: Moment = moment(this.validityInterval.endDateTime)
      let _now: Moment = moment()
  
      // return _now.diff(_validityInterval, 'months')
      return _validityInterval.diff(_now, 'days') + 1
    }

    /**
     * This property returns true if there is a value inside validityInterval
     */
    get isValidityIntervalMissing(): Boolean {
      return this.validityInterval == null
    }

    /**
     * This property returns true if validityInterval and endDateTime has a value
     */
    get isEndDateTimeMissing(): Boolean {
      return this.validityInterval == null ? true : this.validityInterval.endDateTime == null
    }

    get isIssueOrExpiryDateMissing(): Boolean {
      return this.issuingDate == null || this.isEndDateTimeMissing
    }
  }

  /**
   * @author Garfunkel.Vila
   */
  export class ValidityInterval implements IValidityInterval {
    eClass: string
    startDateTime: string;
    endDateTime: string;
  
    constructor(obj: IValidityInterval) {
      this.eClass = obj.eClass
      this.startDateTime = obj.startDateTime
      this.endDateTime = obj.endDateTime
    }
  
    get _startDateTime(): Moment {
      const moment = require('moment')
      return moment(this.startDateTime)
    }
  
    get _endDateTime(): Moment {
      const moment = require('moment')
      return moment(this.endDateTime)
    }
  }
  