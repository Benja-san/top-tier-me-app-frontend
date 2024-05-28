import { Component, Input } from '@angular/core';
import { Raw } from '../../model/raw/raw';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-raw',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './raw.component.html',
  styleUrl: './raw.component.scss',
})
export class RawComponent {
  @Input() raw!: Raw;
}
