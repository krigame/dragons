import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'investigate-view',
  templateUrl: './investigate.component.html',
  styleUrls: ['./investigate.component.scss']
})
export class InvestigateComponent implements OnInit {
  @Input() people: string;
  @Input() state: string;
  @Input() underworld: string;

  @Output() cContinue = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  continue() {
    this.cContinue.emit(1);
  }
}
