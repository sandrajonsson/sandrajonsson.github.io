import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Brewery } from '../../shared/api/brewery-api.service';
import { LinkComponent } from '../../shared/style/link/link.component';
import { TypographyComponent } from '../../shared/style/typography/typography.component';

@Component({
  selector: 'app-detail-card',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LinkComponent, TypographyComponent],
  templateUrl: './detail-card.component.html',
  styleUrl: './detail-card.component.scss',
})
export class DetailCardComponent {
  @Input() brewery: Brewery = { id: '' };
}
