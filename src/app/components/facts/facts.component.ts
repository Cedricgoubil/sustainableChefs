import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
  count: number = 6301368500;
  stop: boolean
  constructor() { }

  ngOnInit() {
  }

  projectcountstop: any = setInterval(() => {
    this.count++;

    if (this.count === 6301369863) {
      clearInterval(this.projectcountstop);
    }

  }, 0.1)

}
