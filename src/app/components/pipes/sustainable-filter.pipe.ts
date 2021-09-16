import { Pipe, PipeTransform } from '@angular/core';
import { FishDto } from 'src/app/dto/fishdto';

@Pipe({
  name: 'sustainableFilter'
})
export class SustainableFilterPipe implements PipeTransform {
  transform(sustainableFilterTransform: FishDto[], sustainableFilter: string) {
    if (!sustainableFilterTransform || !sustainableFilter) {
      return sustainableFilterTransform;
    }

    return sustainableFilterTransform.filter(
      summerGreenList => summerGreenList.conservationStatus === ('sustainable')
    );
  }
}
