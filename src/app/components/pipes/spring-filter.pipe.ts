import { Pipe, PipeTransform } from '@angular/core';
import { GreenDto } from 'src/app/dto/greendto';

@Pipe({
  name: 'springFilter'
})
export class SpringFilterPipe implements PipeTransform {
  transform(springFilterTransform: GreenDto[], springFilter: string) {
    if (!springFilterTransform || !springFilter) {
      return springFilterTransform;
    }

    return springFilterTransform.filter(
      springGreenList => springGreenList.season === ('spring')
    );
  }
}
