import { Component } from '@angular/core';
import { Brewery } from '../../shared/api/brewery-api.service';
import { LinkComponent } from '../../shared/style/link/link.component';
import { TypographyComponent } from '../../shared/style/typography/typography.component';

@Component({
  selector: 'app-brewery-detail',
  standalone: true,
  imports: [LinkComponent, TypographyComponent],
  templateUrl: './brewery-detail-page.component.html',
  styleUrl: './brewery-detail-page.component.scss',
})
export class BreweryDetailPageComponent {
  brewery: Brewery = window.history.state;
}
