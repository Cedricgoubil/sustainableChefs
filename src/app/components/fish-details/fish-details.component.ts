import { Component, OnInit } from '@angular/core';
import { FishServices } from 'src/app/services/fish.services';
import { FishDto } from '../../dto/fishdto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fish-details',
  templateUrl: './fish-details.component.html',
  styleUrls: ['./fish-details.component.css']
})
export class FishDetailsComponent implements OnInit {
  id: string;
  fishDetails: FishDto;

  constructor(
    private fishService: FishServices,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.fishService.getFish(this.id).subscribe(receivingFishDetails => {
      this.fishDetails = receivingFishDetails;
    });
  }

  getEndangeredColor(conservationStatus) {
    switch (conservationStatus) {
      case 'least concern':
        return 'green';
      case 'near threatened':
        return '#ffcc00';
      case 'threatened':
        return 'orange';
      case 'endangered':
        return 'red';
    }
  }
}
