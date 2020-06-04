import { Pipe, PipeTransform } from '@angular/core';
import { GreenDto } from 'src/app/dto/greendto';

@Pipe({
  name: 'summerFilter'
})
export class SummerFilterPipe implements PipeTransform {
  transform(summerFilterTransform: GreenDto[], summerFilter: string) {
    if (!summerFilterTransform || !summerFilter) {
      return summerFilterTransform;
    }

    return summerFilterTransform.filter(
      summerGreenList => summerGreenList.season === ('summer')
    );
  }
}
