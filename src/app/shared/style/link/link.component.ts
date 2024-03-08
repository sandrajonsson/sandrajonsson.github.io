import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

type linkType = 'default' | 'external' | 'back';
type linkSize = 'small' | 'medium';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input() type: linkType = 'default';
  @Input() size: linkSize = 'medium';
  @Input() href = '';
  @Input() class = '';
  @Input() target = '';
  @Input() routerLink = '';
  @Input() routerLinkActive = '';
}
