import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-raw',
  standalone: true,
  imports: [],
  templateUrl: './raw.component.html',
  styleUrl: './raw.component.scss',
})
export class RawComponent {
  @Input() title!: string;
}
