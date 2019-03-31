import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'shop-view',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @Input() items: any;
  @Input() gold: number;

  @Output() cContinue = new EventEmitter<number>();
  @Output() cItemPurchased: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  itemPurchased(event, itemId: string, itemCost: number) {
    // Make api call only if there is enough gold to make the purchase
    if (itemCost < this.gold) {
      this.cItemPurchased.emit(itemId);
    }
  }

  continue() {
    this.cContinue.emit(1);
  }

}
