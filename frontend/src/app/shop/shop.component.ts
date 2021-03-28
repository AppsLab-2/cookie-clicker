import { Upgrade } from './../models/upgrade';
import { UpgradeService } from './../service/upgrade.service';
import { MoneyService } from '../service/money.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  upgrade: Upgrade = this.upgradeService.upgradeProto;
  constructor(private moneyService:MoneyService, private upgradeService: UpgradeService) { }


  ngOnInit(): void {
  }

  buyUpgrade() {
    if(this.moneyService.money.value < this.upgrade.price) {
      return;
    }
    this.moneyService.subtract(this.upgrade.price);
    this.upgradeService.upgradeProto.value += 1;
    this.upgradeService.upgradeProto.price += 50;
  }

}
