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
      state('show', style({opacity: 0, transform: 'translateY(10px) scale(1.2)'})),
      state('hide', style({opacity: 1})),
      transition("show => hide", [
        animate(500)
      ]),
      transition("hide => show", [
        animate(50)
      ]),
    ])
  ]
})
export class NavigationBarComponent implements OnInit {

  money: number;

  show = true;

  get stateName() {
    return this.show ? 'show': 'hide'
  }
  toggle() {
    this.show = !this.show;
  }

  constructor(private moneyService: MoneyService) {}

  ngOnInit(): void {
    this.moneyService.money.subscribe(money => this.money = money)
  }

}
