import { Component, OnInit } from '@angular/core';
import { FruitServices } from 'src/app/services/fruit.services';
import { GreenDto } from '../../dto/greendto';

@Component({
  selector: 'app-fruit-listing',
  templateUrl: './fruit-listing.component.html',
  styleUrls: ['./fruit-listing.component.css']
})
export class FruitListingComponent implements OnInit {
  fruitListing: GreenDto[];

  searchTerm: string;

  isSpringFilter: boolean;
  isSummerFilter: boolean;
  isFallFilter: boolean;
  isWinterFilter: boolean;

  firstPage = 1;

  constructor(
    private fruitServices: FruitServices
  ) { }

  ngOnInit() {
    this.fruitServices.getFruitProducts().subscribe(receivingFruitListing => this.fruitListing = receivingFruitListing);
  }

  displaySpringFruits() {
    if (!this.isSpringFilter) {
      this.isSpringFilter = true;
      this.isSummerFilter = false;
      this.isFallFilter = false;
      this.isWinterFilter = false;
    } else {
      this.isSpringFilter = false;
    }
  }

  displaySummerFruits() {
    if (!this.isSummerFilter) {
      this.isSummerFilter = true;
      this.isSpringFilter = false;
      this.isFallFilter = false;
      this.isWinterFilter = false;
    } else {
      this.isSummerFilter = false;
    }
  }

  displayFallFruits() {
    if (!this.isFallFilter) {
      this.isFallFilter = true;
      this.isSpringFilter = false;
      this.isSummerFilter = false;
      this.isWinterFilter = false;
    } else {
      this.isFallFilter = false;
    }
  }

  displayWinterFruits() {
    if (!this.isWinterFilter) {
      this.isWinterFilter = true;
      this.isSpringFilter = false;
      this.isSummerFilter = false;
      this.isFallFilter = false;
    } else {
      this.isWinterFilter = false;
    }
  }

  resetFruitList() {
    if (!this.isSpringFilter || !this.isSummerFilter || !this.isFallFilter || !this.isWinterFilter) {
      this.isSpringFilter = false;
      this.isSummerFilter = false;
      this.isFallFilter = false;
      this.isWinterFilter = false;
      this.searchTerm = '';
      this.firstPage = 1;
    } else {
      this.isSpringFilter = true;
      this.isSummerFilter = true;
      this.isFallFilter = true;
      this.isWinterFilter = true;
    }
  }

  getSeasonalColor(season) {
    switch (season) {
      case 'spring':
        return 'green';
      case 'summer':
        return 'orange';
      case 'fall':
        return 'maroon';
      case 'winter':
        return '#0099cc';
    }
  }

  onPageChange(page: number) {
    this.firstPage = page;
    window.scrollTo(0, 0);
  }
}
