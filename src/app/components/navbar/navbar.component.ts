import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  fishCaughtPerDay = 0;
  interval;

  constructor() { }

  ngOnInit() {

    this.interval = setInterval(() => {
      if (this.fishCaughtPerDay < 84491) {
        this.fishCaughtPerDay++;
      } else {
        this.fishCaughtPerDay = 0;
      }
    }, 342);
  }
}
