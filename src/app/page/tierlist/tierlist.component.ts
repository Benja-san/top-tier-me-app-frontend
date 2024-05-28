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
    new Raw('S', '#e36868'),
    new Raw('A', '#ffa06b'),
    new Raw('B', '#ffe664'),
    new Raw('C', '#a4fd96'),
    new Raw('D', '#95b2ff'),
  ];
}
