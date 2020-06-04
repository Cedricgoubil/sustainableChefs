import { Pipe, PipeTransform } from '@angular/core';
import { GreenDto } from 'src/app/dto/greendto';

@Pipe({
  name: 'mushroomFilter'
})
export class MushroomFilterPipe implements PipeTransform {
  transform(mushroomFilterTransform: GreenDto[], mushroomFilter: string) {
    if (!mushroomFilterTransform || !mushroomFilter) {
      return mushroomFilterTransform;
    }

    return mushroomFilterTransform.filter(
      mushroomGreenList => mushroomGreenList.family === ('mushrooms')
    );
  }
}
