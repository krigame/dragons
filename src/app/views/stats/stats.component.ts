import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'stats-view',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() lives: number;
  @Input() gold: number;
  @Input() level: number;
  @Input() score: number;
  @Input() highScore: number;
  @Input() turn: number;



  constructor() { }

  ngOnInit() {
  }

}
