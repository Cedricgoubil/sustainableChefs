import { Pipe, PipeTransform } from '@angular/core';
import { FishDto } from 'src/app/dto/fishdto';
import { pipe } from 'rxjs';

@Pipe({
  name: 'fishFilter'
})
export class ListFilterPipe implements PipeTransform {
  transform(fishFilterTransform: FishDto[], searchTerm: string) {
    if (!fishFilterTransform || !searchTerm) {
      return fishFilterTransform;
    }

    return fishFilterTransform.filter(
      pipe(fishCard => {
        return (
          fishCard.commonName.toUpperCase().indexOf(searchTerm.toUpperCase()) === 0
        );
      })
    );
  }
}
