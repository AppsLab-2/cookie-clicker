import { Upgrade } from './../model/upgrade';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {
  money: BehaviorSubject<number> = new BehaviorSubject(1000);
  clickValue: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor() { }

  addUpgrade(upgrade: Upgrade) {
    const moneyValue = this.money.getValue();
    const clickValue = this.clickValue.getValue();

    if(upgrade.name === "CLASSIC") {
      this.clickValue.next(clickValue + 1);
    }
    else if(upgrade.name === "DOUBLE CURRENT") {
      this.clickValue.next(clickValue * 2);
    }

    this.money.next(moneyValue - upgrade.price);
  }

  click(): void {
    const money = this.money.getValue();
    const clickValue = this.clickValue.getValue();
    const newMoney = money + clickValue;
    this.money.next(newMoney);
  }
}
