import { Component, OnInit } from '@angular/core';
import { GreenServices } from 'src/app/services/green.services';
import { GreenDto } from '../../dto/greendto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-green-details',
  templateUrl: './green-details.component.html',
  styleUrls: ['./green-details.component.css']
})
export class GreenDetailsComponent implements OnInit {
  id: string;
  greenProductsDetails: GreenDto;

  constructor(
    private greenServices: GreenServices,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.greenServices.getGreenProduct(this.id).subscribe(receivingGreenDetails => {
      this.greenProductsDetails = receivingGreenDetails;
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
