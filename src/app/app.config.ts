import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { countryReducer } from './store/countries/countries.reducer';
import { CountryEffects } from './store/countries/countries.effect';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { themeReducer } from './store/theme/theme.reducer';
import { UserReducer } from './store/user/user.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
// import Material from '@primeng/themes/material';
import { MyPreset } from './themes/mytheme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEffects([CountryEffects]),
    provideStore({
      countries: countryReducer,
      theme: themeReducer,
      user: UserReducer,
    }),
    provideHttpClient(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '.dark-mode',
        },
      },
    }),
  ],
};
