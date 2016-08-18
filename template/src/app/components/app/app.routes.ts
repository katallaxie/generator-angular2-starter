import { Routes } from '@angular/router';

import { AboutRoutes } from '../+about';
import { HomeRoutes } from '../+home';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes
];
