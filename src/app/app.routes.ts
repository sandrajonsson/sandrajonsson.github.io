import { Routes } from '@angular/router';
import { BreweryFormComponent } from './components/brewery-form/brewery-form.component';
import { BreweryDetailPageComponent } from './components/brewery-detail-page/brewery-detail-page.component';

export const routes: Routes = [
  { path: 'brewery-detail', component: BreweryDetailPageComponent },
  { path: '', component: BreweryFormComponent },
];
