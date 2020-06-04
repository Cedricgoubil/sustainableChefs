import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FactsComponent } from './components/facts/facts.component';
import { FishListingComponent } from './components/fish-listing/fish-listing.component';
import { FishDetailsComponent } from './components/fish-details/fish-details.component';
import { GreenListingComponent } from './components/green-listing/green-listing.component';
import { GreenDetailsComponent } from './components/green-details/green-details.component';
import { FruitListingComponent } from './components/fruit-listing/fruit-listing.component';
import { FruitDetailsComponent } from './components/fruit-details/fruit-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'facts', component: FactsComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'fish-listing', component: FishListingComponent },
  { path: 'fish-details/:id', component: FishDetailsComponent },
  { path: 'green-listing', component: GreenListingComponent },
  { path: 'green-details/:id', component: GreenDetailsComponent },
  { path: 'fruit-listing', component: FruitListingComponent },
  { path: 'fruit-details/:id', component: FruitDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
