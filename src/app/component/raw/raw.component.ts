import { Component, Input } from '@angular/core';
import { Raw } from '../../model/raw/raw';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-raw',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './raw.component.html',
  styleUrl: './raw.component.scss',
})
export class RawComponent {
  @Input() raw!: Raw;
  isEditing: boolean = false;

  openEditMode() {
    this.isEditing = !this.isEditing;
  }
}
