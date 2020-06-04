import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FishDto } from '../dto/fishdto';

@Injectable({
  providedIn: 'root'
})

export class FishServices {
  fish: Observable<FishDto>;
  fishes: Observable<FishDto[]>;
  fishesCollection: AngularFirestoreCollection<FishDto>;
  fishesDoc: AngularFirestoreDocument<FishDto>;

  constructor(private afs: AngularFirestore) {
    this.fishesCollection = this.afs.collection('fishSpecies', ref => ref.orderBy('commonName', 'asc'));
    // KEEP THOSE DATAS
    // https://en.wikipedia.org/wiki/List_of_types_of_seafood
    // https://en.m.wikipedia.org/wiki/List_of_commercially_important_fish_species
    // https://www.mcsuk.org/goodfishguide/search?name=cod
  }

  getFishes(): Observable<FishDto[]> {
    this.fishesCollection = this.afs.collection('fishSpecies', ref => ref.orderBy('commonName', 'asc'));
    this.fishes = this.fishesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as FishDto;
        data.id = action.payload.doc.id;
        // console.log('Fish in service', data);
        return data;
      });
    }));
    return this.fishes;
  }

  getFish(id: string): Observable<FishDto> {
    this.fishesDoc = this.afs.doc<FishDto>(`fishSpecies/${id}`);
    this.fish = this.fishesDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as FishDto;
        data.id = action.payload.id;
        return data;
      }
    }));
    return this.fish;
  }
}
