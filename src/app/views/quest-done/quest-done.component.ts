import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'quest-done-view',
  templateUrl: './quest-done.component.html',
  styleUrls: ['./quest-done.component.scss']
})
export class QuestDoneComponent implements OnInit {
  @Input() success: boolean;
  @Input() feedback: string;
  @Input() name: string;
  @Input() lives: number;

  @Output() cContinue = new EventEmitter<number>();
  @Output() cAnotherQuest = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  continue() {
    this.cContinue.emit(1);
  }

  pickAnotherQuest() {
    this.cAnotherQuest.emit();
  }

}
