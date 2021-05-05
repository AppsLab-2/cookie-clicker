import { BehaviorSubject, Observable } from 'rxjs';
import { Upgrade } from './../model/upgrade';
import { UPGRADES } from './../mockUpgrades';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpgradeService {

  upgrades: BehaviorSubject<Upgrade[]> = new BehaviorSubject(UPGRADES);

  constructor() { }

  getUpgrades(): Observable<Upgrade[]> {
    return this.upgrades;
  }

  updateUpgrade(upgrade: Upgrade) {
    const index = UPGRADES.findIndex((bhjsyvd) => bhjsyvd.id === upgrade.id);
    upgrade.price += upgrade.priceIncrement;
    UPGRADES[index] = upgrade;
    this.upgrades.next(UPGRADES);
  }
}
