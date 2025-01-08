import { Component, input, OnInit } from '@angular/core';
import { Player } from '../players';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  imports:[NgOptimizedImage, CommonModule],
  standalone: true,
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  player = input.required<Player>();
  constructor() { }

  ngOnInit() {
  }

}
