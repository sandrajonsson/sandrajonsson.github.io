import { Routes } from '@angular/router';
import { BreweryFormComponent } from './brewery-form/brewery-form.component';
import { BreweryDetailPageComponent } from './brewery-detail-page/brewery-detail-page.component';

export const routes: Routes = [
  { path: 'brewery-detail', component: BreweryDetailPageComponent },
  { path: '', component: BreweryFormComponent },
];
