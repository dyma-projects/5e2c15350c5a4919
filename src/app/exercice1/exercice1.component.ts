import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  value = '';
  // tslint:disable-next-line:no-inferrable-types
  isclick: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  clickAction() {
    // tslint:disable-next-line:no-trailing-whitespace
    // tslint:disable-next-line:no-unused-expression
    // tslint:disable-next-line:no-unused-expression
    this.isclick = !this.isclick;
  }
}
