import { Component, OnInit } from '@angular/core';
import { MoneyService } from '../../service/money.service';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css'],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({opacity: 0, transform: 'translateY(30px) scale(1.2)'}),
        animate(500)
      ]),
      transition(":leave", [
        animate(500, style({opacity: 0}))
      ]),
    ])
  ]
  
})
export class ClickerComponent {

  clickValue: number;
  elements = [];
  constructor(private moneyService: MoneyService) {}

  ngOnInit(): void {
    this.moneyService.clickValue.subscribe(value => this.clickValue = value)
  }
  destroy(index): void {
      this.elements.shift();
  }

  onClick(){
    this.moneyService.click();
    this.elements.push("");
  }

  getNewPosition(): number[] {
    const height = window.innerHeight - 300;
    const width = window.innerWidth - 50;

    const newHeight = Math.floor(Math.random() * height);
    const newWidth = Math.floor(Math.random() * width);

    return [newHeight, newWidth];
  }

  async animate(): Promise<void> {
    const interval = setInterval(() => {
      this.animation();
    }, 800);
    await new Promise(resolve => setTimeout(resolve, 20000));
    clearInterval(interval);
    this.moveButtonToStart();
  }

  moveButtonToStart(): void {
    const element = document.getElementById('button');
    element.animate({top: '50%', left: '50%'}, {duration: 1000, fill: 'forwards'});
  }

  animation(): void {
    const element = document.getElementById('button');
    const newPosition = this.getNewPosition();

    element.animate({top: `${newPosition[0]}px`, left: `${newPosition[1]}px`}, {duration: 700, fill: 'forwards' });
  }

}
