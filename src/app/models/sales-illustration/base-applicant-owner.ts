export interface BaseApplicantOwner {
  channel: string;
  name: string;
  age: number;
  gender: string;
  birthdate: string;
  occupation: {
    name: string;
    category: string;
    vessel: string;
  }
  workTerritory: {
    country: string;
    province: string;
    city: string;
  }
  homeTerritory: {
    country: string;
    province: string;
    city: string;
  }
  isAoEqualsToPi: string;
}