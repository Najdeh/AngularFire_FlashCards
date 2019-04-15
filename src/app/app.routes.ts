import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { FlashCardsComponent } from './flash-cards/flash-cards.component';
import { FlashCardsCrudComponent } from './flash-cards-crud/flash-cards-crud.component';

export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'flash-cards', component: FlashCardsComponent },
  { path: 'flash-cards-crud', component: FlashCardsCrudComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'details/:id', component: EditUserComponent, resolve: {data : EditUserResolver} }
];
