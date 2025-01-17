import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { players } from '../players';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppComponent {
  title = 'players-nba-from-scratch';
  players = players;
}
