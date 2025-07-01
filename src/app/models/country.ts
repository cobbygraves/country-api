export interface Country {
  flags: {
    png: any;
    svg: any;
    alt: string;
  };
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  capital: string[];
}

export interface CountryState {
  countries: Country[];
  loading: boolean;
}
