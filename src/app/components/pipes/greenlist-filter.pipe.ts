import { Pipe, PipeTransform } from '@angular/core';
import { GreenDto } from 'src/app/dto/greendto';
import { pipe } from 'rxjs';

@Pipe({
  name: 'greenFilter'
})
export class GreenListFilterPipe implements PipeTransform {
  transform(greenFilterTransform: GreenDto[], searchTerm: string) {
    if (!greenFilterTransform || !searchTerm) {
      return greenFilterTransform;
    }

    return greenFilterTransform.filter(
      pipe(greenCard => {
        return (
          greenCard.commonName.toUpperCase().indexOf(searchTerm.toUpperCase()) === 0
        );
      })
    );
  }
}
