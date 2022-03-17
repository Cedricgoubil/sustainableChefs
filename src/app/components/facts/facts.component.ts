import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
  count: number = 100;
  stop: boolean

  constructor() { }

  ngOnInit() {
  }
  // Test

  fishCaughtPerDay: any = setInterval(() => {
    this.count++;
    if (this.count === 863) {
      clearInterval(this.fishCaughtPerDay);
    }
  }, 0.1)
}
