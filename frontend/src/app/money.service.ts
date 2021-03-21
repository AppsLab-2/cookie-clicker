import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  money: BehaviorSubject<number> = new BehaviorSubject(1000000000000);

  constructor() { }

  updateMoney(money: number) {
    return this.money.next(money);
  }

}
