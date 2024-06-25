import { Component } from '@angular/core';
import { RawComponent } from '../../component/raw/raw.component';
import { Raw } from '../../model/raw/raw';
import { NgStyle } from '@angular/common';
import { Stuff } from '../../model/stuff/stuff';

@Component({
  selector: 'app-tierlist',
  standalone: true,
  imports: [RawComponent, NgStyle],
  templateUrl: './tierlist.component.html',
  styleUrl: './tierlist.component.scss',
})
export class TierlistComponent {
  title: string = 'pinguins';

  raws: Raw[] = [
    new Raw('S', '#e36868'),
    new Raw('A', '#ffa06b'),
    new Raw('B', '#ffe664'),
    new Raw('C', '#a4fd96'),
    new Raw('D', '#95b2ff'),
  ];

  library: Stuff[] = [
    new Stuff(
      'Madagascar penguins band',
      'https://www.intofilm.org/intofilm-production/490/scaledcropped/3000x1688/resources/490/penguins-of-madagascar-header.jpg'
    ),
    new Stuff(
      'Linux Penguin',
      'https://logos-world.net/wp-content/uploads/2020/09/Linux-Logo.png'
    ),
    new Stuff(
      'Pingu',
      'https://imageservice.sky.com/contentid/iYEQYZ6ymh22SwV3rL5FkW/LAND_N_4_3-SERIES?language=eng&territory=GB&proposition=NOWTV&version=5e882aa9-d8d7-3462-993a-23c7789f5d67'
    ),
    new Stuff(
      'Happy Feet',
      'https://resizing.flixster.com/GjMZaaLzsmvsVI5ExDUeR2udCkY=/1100x618/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159730_i_h8_ac.jpg'
    ),
    new Stuff(
      'Lovelace',
      'https://www.lejdd.fr/lmnr/var/jdd/public/media/image/2022/07/20/18/happy-feet-2.jpg?VersionId=94MePvH3tOP3dRNp385d3I1tzIh9v_NU'
    ),
    new Stuff(
      'Animal Crossing Penguin',
      'https://w7.pngwing.com/pngs/673/433/png-transparent-penguin-animal-crossing-pocket-camp-duck-video-games-bird-penguin-game-animals-animal.png'
    ),
    new Stuff(
      'Elisabeth from Gintama',
      'https://img.goodfon.com/wallpaper/big/a/42/gintama-silver-soul-elizabeth-6387.webp'
    ),
    new Stuff(
      "Batman's the Penguin",
      'https://www.urban-comics.com/wp-content/uploads/2021/06/pingouin3.jpg'
    ),
  ];
}
