import { UpgradeService } from './../../service/upgrade.service';
import { Upgrade } from '../../model/upgrade';
import { MoneyService } from '../../service/money.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  upgrades$: Observable<Upgrade[]>;

  constructor(
    private upgradeService: UpgradeService,
    private moneyService: MoneyService
    ) { }

  ngOnInit(): void {
    this.upgrades$ = this.upgradeService.getUpgrades();
  }

  buyUpgrade(upgrade: Upgrade): void {
    const money = this.moneyService.money.getValue();
    if(money >= upgrade.price) {
      this.moneyService.addUpgrade(upgrade);
      this.upgradeService.updateUpgrade(upgrade);
    }
  }
}
