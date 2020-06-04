import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FruitDto } from '../dto/fruitdto';

@Injectable({
  providedIn: 'root'
})

export class FruitServices {
  fruitProduct: Observable<FruitDto>;
  fruitProducts: Observable<FruitDto[]>;
  fruitProductCollection: AngularFirestoreCollection<FruitDto>;
  fruitProductDoc: AngularFirestoreDocument<FruitDto>;

  constructor(private afs: AngularFirestore) {
    // https://generation-m.migros.ch/fr/preserver-la-planete/astuces-et-outils/tableau-des-saisons
    // https://www.thespruceeats.com/guide-to-seasonal-fruits-and-vegetables-2216387#spring
    // https://www.nutritionvalue.org/Pineapple%2C_all_varieties%2C_raw_nutritional_value.html
    // https://www.saisons-fruits-legumes.fr
  }

  getFruitProducts(): Observable<FruitDto[]> {
    this.fruitProductCollection = this.afs.collection('fruitProducts', ref => ref.orderBy('commonName', 'asc'));
    this.fruitProducts = this.fruitProductCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as FruitDto;
        data.id = action.payload.doc.id;
        console.log(data);
        return data;
      });
    }));
    return this.fruitProducts;
  }

  getFruitProduct(id: string): Observable<FruitDto> {
    this.fruitProductDoc = this.afs.doc<FruitDto>(`fruitProducts/${id}`);
    this.fruitProduct = this.fruitProductDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as FruitDto;
        data.id = action.payload.id;
        return data;
      }
    }));
    return this.fruitProduct;
  }
}
