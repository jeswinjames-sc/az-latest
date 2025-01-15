import { Injectable } from '@angular/core';
import { SIProduct } from '@models/sales-illustration/si-product';
import { CHANNEL } from '@utils/enums/channel';
import cloneDeep from 'lodash.clonedeep';
/**
 * Injectable
 * - This services is responsible for decommissioning products
 * @author Jaemar Bernal
 */

@Injectable({
  providedIn: 'root'
})
export class DecomProductsService {
  // for future reference the value from this will be moved to firestore via cms

  /**
* decomProducts contains the array of plancodes that are subject for decommission
* Just add another plancode if a certain product is requested to be removed
*/
  decomProducts: string[] = [
    'UL_HEALTH_10_PHP_NG_AGENCY',
    // 'UL_HEALTH_10_PHP_NG_PNB',
    'UL_HEALTH_10_USD_NG_AGENCY',
    // 'UL_HEALTH_10_USD_NG_PNB',
    'UL_HEALTH_20_PHP_NG_AGENCY',
    // 'UL_HEALTH_20_PHP_NG_PNB',
    'UL_HEALTH_20_USD_NG_AGENCY',
    // 'UL_HEALTH_20_USD_NG_PNB',
    'UL_HEALTH_PHP_NG_AGENCY',
    // 'UL_HEALTH_PHP_NG_PNB',
    'UL_HEALTH_USD_NG_AGENCY',
    // 'UL_HEALTH_USD_NG_PNB',
    'UL_OPTIMAX_PHP_GAE_AGENCY',
    'UL_OPTIMAX_USD_GAE_AGENCY',
    'UL_OPTIMAX_PHP_GAE_PNB',
    'UL_OPTIMAX_USD_GAE_PNB',
    'UL_MAXIMAL_USD_NG_AGENCY',
    'UL_MAXIMAL_PHP_NG_AGENCY',
    'UL_MAXIMAL_USD_NG_PNB',
    'UL_MAXIMAL_PHP_NG_PNB',
    'TR_EAZY_HEALTH_2000_PHP_NG_HSBC',
    'IHP_WELL_PHP_HSBC',
    'UL_WEALTH_PHP_NG_HSBC',
    'UL_AZPIRE_WIZ_PHP_NG_HSBC',
    'UL_AZPIRE_PEAK_PHP_NG_HSBC',
    'UL_AZPIRE_GROWTH_PHP_NG_HSBC',
    'TR_INTENSIFY4_PHP_NG_PNB',
    'TR_TERM1_PHP_NG_PNB',
    'TR_PREMIER_LIFE_PHP_NG_PNB',
    'UL_OPTIMAX_PHP_GAE_PNB',
    'UL_OPTIMAX_USD_GAE_PNB',
    'UL_AZPIRE_PEAK_USD_GAE_PNB',
    'UL_AZPIRE_PEAK_USD_NG_PNB',
    'UL_AZPIRE_WIZ_PHP_GAE_PNB',
    'UL_AZPIRE_WIZ_PHP_NG_PNB',
    'UL_AZPIRE_WIZ_USD_GAE_PNB',
    'UL_AZPIRE_WIZ_USD_NG_PNB',
    'UL_DIVERSIFY_PHP_NG_PNB',
    'UL_DIVERSIFY_USD_NG_PNB',
    'UL_DIVERSIFY_PHP_GAE_PNB',
    'UL_DIVERSIFY_USD_GAE_PNB',
    'UL_OPTIMAX_PHP_GAE_AGENCY',
    'UL_OPTIMAX_USD_GAE_AGENCY',
    'UL_SHIELD_PHP_NG_AGENCY',
    'UL_SHIELD_USD_GAE_AGENCY',
    'UL_SHIELD_USD_NG_AGENCY',
    'UL_SHIELD_PHP_GAE_AGENCY',
    'UL_AZPIRE_PEAK_PHP_GAE_AGENCY',
    'UL_AZPIRE_PEAK_PHP_NG_AGENCY',
    'UL_AZPIRE_WIZ_PHP_GAE_AGENCY',
    'UL_AZPIRE_WIZ_PHP_NG_AGENCY',
    'UL_AZPIRE_WIZ_USD_GAE_AGENCY',
    'UL_AZPIRE_WIZ_USD_NG_AGENCY',
    'UL_DIVERSIFY_PHP_GAE_AGENCY',
    'UL_DIVERSIFY_USD_GAE_AGENCY',
    'UL_DIVERSIFY_USD_NG_AGENCY',
    'UL_DIVERSIFY_PHP_NG_AGENCY',
    'UL_AZPIRE_PEAK_PHP_GAE_PNB',
    'UL_AZPIRE_PEAK_PHP_NG_PNB',
    'UL_POWERLINK_ELITE_USD_GAE_PNB',
    'UL_POWERLINK_ELITE_PHP_GAE_PNB',
    'TR_AZ_FUNDAMENTAL_PHP_NG_PNB',
    'TR_PREMIER_LIFE10_PHP_NG_PNB'
  ];

  constructor() {
  }


  filterDecomProducts(siProducts: SIProduct) {

    let newObj = cloneDeep(siProducts);
    for (const item in newObj) {
      const { product } = newObj[item];
      for (const key in product) {
        if(key.includes('EAZY_HEALTH')) { //temporary patching pls remove after new jar 
          if(key.includes('AGENCY')) {
            newObj[item]['product'][key]['planCode'] = 'TR_EAZY_HEALTH_1000_PHP_NG_AGENCY'
          } else if(key.includes('PNB')) {
            newObj[item]['product'][key]['planCode'] = 'TR_EAZY_HEALTH_1000_PHP_NG_PNB'
          }
        }
        const { planCode } = product[key];
        if (this.decomProducts.includes(planCode)) {
          delete newObj[item]['product'][key];
        }
      }
    }
    return newObj;
  }
}
