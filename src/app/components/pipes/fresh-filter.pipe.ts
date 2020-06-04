import { Pipe, PipeTransform } from '@angular/core';
import { FishDto } from 'src/app/dto/fishdto';

@Pipe({
  name: 'freshFilter'
})
export class FreshFilterPipe implements PipeTransform {
  transform(freshFilterTransform: FishDto[], freshFilter: string) {
    if (!freshFilterTransform || !freshFilter) {
      return freshFilterTransform;
    }

    return freshFilterTransform.filter(
      freshFishList => freshFishList.water === ('fresh water')
    );
  }
}
