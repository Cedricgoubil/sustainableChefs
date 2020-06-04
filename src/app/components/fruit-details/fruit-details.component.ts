import { Component, OnInit } from '@angular/core';
import { FruitServices } from 'src/app/services/fruit.services';
import { FruitDto } from '../../dto/fruitdto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.css']
})
export class FruitDetailsComponent implements OnInit {
  id: string;
  fruitProductsDetails: FruitDto;

  constructor(
    private fruitServices: FruitServices,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.fruitServices.getFruitProduct(this.id).subscribe(receivingFruitDetails => {
      this.fruitProductsDetails = receivingFruitDetails;
    });
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
        return 'blue';
    }
  }
}

