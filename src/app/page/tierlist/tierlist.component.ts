import { Component } from '@angular/core';
import { RawComponent } from '../../component/raw/raw.component';
import { Raw } from '../../model/raw/raw';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-tierlist',
  standalone: true,
  imports: [RawComponent, NgStyle],
  templateUrl: './tierlist.component.html',
  styleUrl: './tierlist.component.scss',
})
export class TierlistComponent {
  title: string = 'Vos meilleurs pinguins';

  raws: Raw[] = [
    new Raw('S', 'inherit'),
    new Raw('A', 'inherit'),
    new Raw('B', 'inherit'),
    new Raw('C', 'inherit'),
    new Raw('D', 'inherit'),
  ];
}
