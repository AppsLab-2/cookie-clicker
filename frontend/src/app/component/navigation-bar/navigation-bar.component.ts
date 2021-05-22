import { BehaviorSubject } from 'rxjs';
import { MoneyService } from '../../service/money.service';
import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({opacity: 0, transform: 'translateY(25px) scale(0.5)'}),
        animate(1500)
      ]),
    ])
  ]
})
export class NavigationBarComponent implements OnInit {

  money: number;

  constructor(private moneyService: MoneyService) {}

  ngOnInit(): void {
    this.moneyService.money.subscribe(money => this.money = money)
  }

}