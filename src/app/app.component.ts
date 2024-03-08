import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BreweryFormComponent } from './components/brewery-form/brewery-form.component';
import { BreweryDetailPageComponent } from './components/brewery-detail-page/brewery-detail-page.component';
import { TypographyComponent } from './shared/style/typography/typography.component';
import { LinkComponent } from './shared/style/link/link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    LinkComponent,
    TypographyComponent,
    BreweryFormComponent,
    BreweryDetailPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'brewery-search';
}
