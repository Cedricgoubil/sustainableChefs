import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GreenDto } from '../dto/greendto';

@Injectable({
  providedIn: 'root'
})

export class GreenServices {
  greenProduct: Observable<GreenDto>;
  greenProducts: Observable<GreenDto[]>;
  greenProductCollection: AngularFirestoreCollection<GreenDto>;
  greenProductDoc: AngularFirestoreDocument<GreenDto>;

  constructor(private afs: AngularFirestore) {
  }

  getGreenProducts(): Observable<GreenDto[]> {
    this.greenProductCollection = this.afs.collection('greenProducts', ref => ref.orderBy('commonName', 'asc'));
    this.greenProducts = this.greenProductCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as GreenDto;
        data.id = action.payload.doc.id;
        // console.log(data);
        return data;
      });
    }));
    return this.greenProducts;
  }

  getGreenProduct(id: string): Observable<GreenDto> {
    this.greenProductDoc = this.afs.doc<GreenDto>(`greenProducts/${id}`);
    this.greenProduct = this.greenProductDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as GreenDto;
        data.id = action.payload.id;
        return data;
      }
    }));
    return this.greenProduct;
  }
}
