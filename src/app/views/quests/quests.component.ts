import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'quests-view',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss']
})
export class QuestsComponent implements OnInit {
  @Input() quests: any;
  @Input() name: string;
  @Input() turn: number;

  @Output() cContinue = new EventEmitter<number>();
  @Output() cQuestPicked: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  questPicked(event, pickId: string) {
    console.log('Quests view; pickID: ', pickId);
    this.cQuestPicked.emit(pickId);
  }

  continue() {
    this.cContinue.emit(1);
  }
}
