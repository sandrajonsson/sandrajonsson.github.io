import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Brewery } from '../../shared/api/brewery-api.service';
import { LinkComponent } from '../../shared/style/link/link.component';
import { TypographyComponent } from '../../shared/style/typography/typography.component';

@Component({
  selector: 'app-brewery-detail-card',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LinkComponent, TypographyComponent],
  templateUrl: './brewery-detail-card.component.html',
  styleUrl: './brewery-detail-card.component.scss',
})
export class BreweryDetailCardComponent {
  @Input() brewery: Brewery = { id: '' };
}
