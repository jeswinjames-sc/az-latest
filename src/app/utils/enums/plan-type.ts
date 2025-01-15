export enum PLAN_TYPE {
  UL = 'UL',
  TRAD = 'TR'
}

export const parsePlanTypeToString = (planTypeCd: PLAN_TYPE): String => {
  let CdLong = {}
  CdLong[PLAN_TYPE.TRAD] = 'Traditional'
  CdLong[PLAN_TYPE.UL] = 'Variable'

  return CdLong[planTypeCd]
}