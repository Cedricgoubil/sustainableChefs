import { Pipe, PipeTransform } from '@angular/core';
import { FishDto } from 'src/app/dto/fishdto';

@Pipe({
  name: 'saltyFilter'
})
export class SaltyFilterPipe implements PipeTransform {
  transform(saltyFilterTransform: FishDto[], saltyFilter: string) {
    if (!saltyFilterTransform || !saltyFilter) {
      return saltyFilterTransform;
    }

    return saltyFilterTransform.filter(
      saltFishList => saltFishList.water === ('salt water')
    );
  }
}
