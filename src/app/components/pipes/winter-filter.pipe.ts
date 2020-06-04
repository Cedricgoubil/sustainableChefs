import { Pipe, PipeTransform } from '@angular/core';
import { GreenDto } from 'src/app/dto/greendto';

@Pipe({
  name: 'winterFilter'
})
export class WinterFilterPipe implements PipeTransform {
  transform(winterFilterTransform: GreenDto[], winterFilter: string) {
    if (!winterFilterTransform || !winterFilter) {
      return winterFilterTransform;
    }

    return winterFilterTransform.filter(
      winterGreenList => winterGreenList.season === ('winter')
    );
  }
}