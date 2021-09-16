import { Component, OnInit } from '@angular/core';
import { FishServices } from 'src/app/services/fish.services';
import { FishDto } from '../../dto/fishdto';

@Component({
  selector: 'app-fish-listing',
  templateUrl: './fish-listing.component.html',
  styleUrls: ['./fish-listing.component.css']
})
export class FishListingComponent implements OnInit {
  fishListing: FishDto[];
  saltyWaterFilter: boolean;
  freshWaterFilter: boolean;
  sustainableFishFilter: boolean;
  searchTerm: string;

  selectedFishType = '';
  firstPage: number;

  constructor(
    private fishServices: FishServices
  ) { }

  ngOnInit() {
    this.fishServices.getFishes().subscribe(receivingFishListing => this.fishListing = receivingFishListing);
  }

  toggleSaltyFish() {
    if (!this.saltyWaterFilter) {
      this.saltyWaterFilter = true;
      this.freshWaterFilter = false;
      this.firstPage = 1;
    } else {
      this.saltyWaterFilter = false;
    }
  }

  toggleFreshFish() {
    if (!this.freshWaterFilter) {
      this.freshWaterFilter = true;
      this.saltyWaterFilter = false;
      this.firstPage = 1;
    } else {
      this.freshWaterFilter = false;
    }
  }

  toggleSustainableFish() {
    if (!this.sustainableFishFilter) {
      this.sustainableFishFilter = true;
      this.firstPage = 1;
    } else {
      this.sustainableFishFilter = false;
    }
  }

  resetFishList() {
    if (!this.freshWaterFilter || !this.saltyWaterFilter || !this.sustainableFishFilter) {
      this.freshWaterFilter = false;
      this.saltyWaterFilter = false;
      this.sustainableFishFilter = false;
      this.searchTerm = '';
      this.firstPage = 1;
    } else {
      this.freshWaterFilter = true;
      this.saltyWaterFilter = true;
      this.sustainableFishFilter = true;
    }
  }

  getEndangeredColor(conservationStatus) {
    switch (conservationStatus) {
      case 'sustainable':
        return '#04aa6d';
      case 'near threatened':
        return '#ffcc00';
      case 'threatened':
        return '#ff5c33';
      case 'endangered':
        return '#e60000';
    }
  }

  onPageChange(page: number) {
    this.firstPage = page;
    window.scrollTo(0, 0);
  }
}
