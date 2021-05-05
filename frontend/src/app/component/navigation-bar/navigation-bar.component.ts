import { BehaviorSubject } from 'rxjs';
import { MoneyService } from '../../service/money.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  money: number;

  constructor(private moneyService: MoneyService) {}

  ngOnInit(): void {
    this.moneyService.money.subscribe(money => this.money = money)
  }

}
