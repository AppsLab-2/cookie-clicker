import { Upgrade } from '../models/upgrade';
import { UpgradeService } from './upgrade.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {
  money: BehaviorSubject<number> = new BehaviorSubject(1000);

  constructor(private upgradeService: UpgradeService) { }

  click(): void {
     this.money.next(this.money.getValue() + this.upgradeService.upgradeProto.value); 
  }

  subtract(value: number): void {
    this.money.next(this.money.getValue() - value);
  }
}
