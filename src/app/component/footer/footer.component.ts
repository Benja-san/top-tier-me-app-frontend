import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type Network = {
  id: number;
  title: string;
  picture: string;
  url: string;
};

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  networks: Network[] = [
    {
      id: 1,
      title: 'Github',
      picture: 'assets/icon/github.svg',
      url: 'https://github.com/Benja-san',
    },
    {
      id: 2,
      title: 'Twitch',
      picture: 'assets/icon/twitch.svg',
      url: 'https://www.twitch.tv/j_maniak',
    },
  ];
}
