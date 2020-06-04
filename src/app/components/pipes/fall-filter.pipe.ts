import { Pipe, PipeTransform } from '@angular/core';
import { GreenDto } from 'src/app/dto/greendto';

@Pipe({
  name: 'fallFilter'
})
export class FallFilterPipe implements PipeTransform {
  transform(fallFilterTransform: GreenDto[], fallFilter: string) {
    if (!fallFilterTransform || !fallFilter) {
      return fallFilterTransform;
    }

    return fallFilterTransform.filter(
      fallGreenList => fallGreenList.season === ('fall')
    );
  }
}
