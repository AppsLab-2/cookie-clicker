import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MoneyService } from '../service/money.service';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent {

  onClick(){
    this.moneyService.click();
  }

  constructor(private moneyService: MoneyService) {}

  ngOnInit(): void {

  }

}
