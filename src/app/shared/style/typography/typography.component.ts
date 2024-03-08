import { Component, Input } from '@angular/core';

type typographyType = 'h1' | 'h2' | 'subtitle' | 'body';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss',
})
export class TypographyComponent {
  @Input() type: typographyType = 'body';
  @Input() fontWeight = '';
  @Input() color = '';
}
