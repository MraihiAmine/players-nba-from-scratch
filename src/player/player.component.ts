import { Component, input } from '@angular/core';
import { Player } from '../players';

@Component({
  selector: 'app-player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.css']
})
export class PlayerComponent {
  player = input.required<Player>();
  constructor() {
  }
}
