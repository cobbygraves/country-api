export interface Country {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

export interface CountryState {
  countries: Country[];
  loading: boolean;
  // error: string | null;
}
