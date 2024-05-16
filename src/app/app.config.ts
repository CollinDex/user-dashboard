import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideProtractorTestingSupport(),
    provideStore(reducers, { metaReducers })
]
};
