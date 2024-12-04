import {Routes} from '@angular/router';
import {PersonListComponent} from './components/person-list/person-list.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {FormComponent} from './components/form/form.component';

export const routes: Routes = [
  {path: 'personList', component: PersonListComponent},
  {path: 'form', component: FormComponent},
  {path: 'notFound', component: NotFoundComponent},
  {path: '', redirectTo: '/personList', pathMatch: 'full'},
  {path: '**', redirectTo: 'notFound', pathMatch: 'full'},
];
