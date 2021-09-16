import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FishServices } from './services/fish.services';

// Firestore
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FactsComponent } from './components/facts/facts.component';
import { FishListingComponent } from './components/fish-listing/fish-listing.component';
import { FishDetailsComponent } from './components/fish-details/fish-details.component';
import { ListFilterPipe } from './components/pipes/fishlist-filter.pipe';
import { SaltyFilterPipe } from './components/pipes/salty-filter.pipe';
import { FreshFilterPipe } from './components/pipes/fresh-filter.pipe';
import { GreenListingComponent } from './components/green-listing/green-listing.component';
import { GreenDetailsComponent } from './components/green-details/green-details.component';
import { FruitListingComponent } from './components/fruit-listing/fruit-listing.component';
import { FruitDetailsComponent } from './components/fruit-details/fruit-details.component';
import { GreenListFilterPipe } from './components/pipes/greenlist-filter.pipe';
import { MushroomFilterPipe } from './components/pipes/mushroom-filter.pipe';
import { HerbFilterPipe } from './components/pipes/herb-filter.pipe';
import { SpringFilterPipe } from './components/pipes/spring-filter.pipe';
import { SummerFilterPipe } from './components/pipes/summer-filter.pipe';
import { SustainableFilterPipe } from './components/pipes/sustainable-filter.pipe';
import { FallFilterPipe } from './components/pipes/fall-filter.pipe';
import { WinterFilterPipe } from './components/pipes/winter-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomePageComponent,
    NavbarComponent,
    FooterComponent,
    FactsComponent,
    FishListingComponent,
    FishDetailsComponent,
    ListFilterPipe,
    SaltyFilterPipe,
    FreshFilterPipe,
    GreenListingComponent,
    GreenDetailsComponent,
    FruitListingComponent,
    FruitDetailsComponent,
    GreenListFilterPipe,
    MushroomFilterPipe,
    HerbFilterPipe,
    SpringFilterPipe,
    SummerFilterPipe,
    SustainableFilterPipe,
    FallFilterPipe,
    WinterFilterPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'chefssustainablefish'),
    AngularFireAnalyticsModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [FishServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
