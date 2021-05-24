import { Upgrade } from './../model/upgrade';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {
  money: BehaviorSubject<number> = new BehaviorSubject(1000);
  clickValue: BehaviorSubject<number> = new BehaviorSubject(1);
  isBonusActive: BehaviorSubject<boolean> = new BehaviorSubject(false);
  previousValue: number;


  constructor() { }

  addUpgrade(upgrade: Upgrade) {
    const moneyValue = this.money.getValue();
    const clickValue = this.clickValue.getValue();

    const upgradeName = upgrade.name;

    if(upgradeName === "CLASSIC") {
      this.clickValue.next(clickValue + 1);
    }
    else if(upgradeName === "DOUBLE CURRENT") {
      this.clickValue.next(clickValue * 2);
    }
    else if(upgradeName === "30S BONUS") {
      this.isBonusActive.next(true);
    }

    this.money.next(moneyValue - upgrade.price);
  }

  click(): void {
    const money = this.money.getValue();
    let clickValue = this.clickValue.getValue();
    if(this.isBonusActive.value) {
      if (!this.previousValue) {
        this.previousValue = clickValue;
      }
      const bonusClickValue = clickValue * 2;
      const newMoney = money + bonusClickValue;
      

      this.money.next(newMoney);
      return;
    }
    if (this.previousValue){
      clickValue = this.previousValue;
      this.clickValue.next(clickValue);
      this.previousValue = undefined;
      
    }
    const newMoney = money + clickValue;
    this.money.next(newMoney);
  }
}
