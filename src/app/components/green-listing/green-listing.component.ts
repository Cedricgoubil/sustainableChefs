import { Component, OnInit } from '@angular/core';
import { GreenServices } from 'src/app/services/green.services';
import { GreenDto } from '../../dto/greendto';

@Component({
  selector: 'app-green-listing',
  templateUrl: './green-listing.component.html',
  styleUrls: ['./green-listing.component.css']
})
export class GreenListingComponent implements OnInit {
  greenListing: GreenDto[];

  searchTerm: string;

  isMushroomFilter: boolean;
  isHerbFilter: boolean;
  isSpringFilter: boolean;
  isSummerFilter: boolean;
  isFallFilter: boolean;
  isWinterFilter: boolean;

  firstPage = 1;

  constructor(
    private greenServices: GreenServices
  ) { }

  ngOnInit() {
    this.greenServices.getGreenProducts().subscribe(receivingGreenListing => this.greenListing = receivingGreenListing);
  }

  displayMushroomsGreens() {
    if (!this.isMushroomFilter) {
      this.isMushroomFilter = true;
      this.isSpringFilter = false;
      this.isSummerFilter = false;
      this.isFallFilter = false;
      this.isWinterFilter = false;
      this.isHerbFilter = false;
      this.firstPage = 1;
    } else {
      this.isMushroomFilter = false;
    }
  }

  displayHerbsGreens() {
    if (!this.isHerbFilter) {
      this.isHerbFilter = true;
      this.isSpringFilter = false;
      this.isSummerFilter = false;
      this.isFallFilter = false;
      this.isWinterFilter = false;
      this.isMushroomFilter = false;
      this.firstPage = 1;
    } else {
      this.isHerbFilter = false;
    }
  }

  displaySpringGreens() {
    if (!this.isSpringFilter) {
      this.isSpringFilter = true;
      this.isSummerFilter = false;
      this.isFallFilter = false;
      this.isWinterFilter = false;
      this.isMushroomFilter = false;
      this.isHerbFilter = false;
      this.firstPage = 1;
    } else {
      this.isSpringFilter = false;
    }
  }

  displaySummerGreens() {
    if (!this.isSummerFilter) {
      this.isSummerFilter = true;
      this.isSpringFilter = false;
      this.isFallFilter = false;
      this.isWinterFilter = false;
      this.isMushroomFilter = false;
      this.isHerbFilter = false;
      this.firstPage = 1;
    } else {
      this.isSummerFilter = false;
    }
  }

  displayFallGreens() {
    if (!this.isFallFilter) {
      this.isFallFilter = true;
      this.isSpringFilter = false;
      this.isSummerFilter = false;
      this.isWinterFilter = false;
      this.isMushroomFilter = false;
      this.isHerbFilter = false;
      this.firstPage = 1;
    } else {
      this.isFallFilter = false;
    }
  }

  displayWinterGreens() {
    if (!this.isWinterFilter) {
      this.isWinterFilter = true;
      this.isSpringFilter = false;
      this.isSummerFilter = false;
      this.isFallFilter = false;
      this.isMushroomFilter = false;
      this.isHerbFilter = false;
      this.firstPage = 1;
    } else {
      this.isWinterFilter = false;
    }
  }

  resetGreenList() {
    if (!this.isSpringFilter || !this.isSummerFilter || !this.isFallFilter || !this.isWinterFilter) {
      this.isSpringFilter = false;
      this.isSummerFilter = false;
      this.isFallFilter = false;
      this.isWinterFilter = false;
      this.isMushroomFilter = false;
      this.isHerbFilter = false;
      this.searchTerm = '';
      this.firstPage = 1;
    } else {
      this.isSpringFilter = true;
      this.isSummerFilter = true;
      this.isFallFilter = true;
      this.isWinterFilter = true;
      this.isMushroomFilter = true;
      this.isHerbFilter = true;
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
