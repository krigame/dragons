import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'default-view',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  @Input() name: string;
  @Input() turn: number;
  @Input() gold: number;
  @Input() gameId: string;

  @Output() cPickQuest = new EventEmitter<string>();
  @Output() cInvestigate = new EventEmitter<string>();
  @Output() cShop = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  pickQuest() {
    this.cPickQuest.emit('quest');
  }

  investigate() {
    this.cInvestigate.emit('invest');
  }

  shopping() {
    this.cShop.emit('shop');
  }

}
