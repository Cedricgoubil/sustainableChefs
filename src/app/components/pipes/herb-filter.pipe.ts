import { Pipe, PipeTransform } from '@angular/core';
import { GreenDto } from 'src/app/dto/greendto';

@Pipe({
  name: 'herbFilter'
})
export class HerbFilterPipe implements PipeTransform {
  transform(herbFilterTransform: GreenDto[], herbFilter: string) {
    if (!herbFilterTransform || !herbFilter) {
      return herbFilterTransform;
    }

    return herbFilterTransform.filter(
      herbGreenList => herbGreenList.family === ('herbs')
    );
  }
}
