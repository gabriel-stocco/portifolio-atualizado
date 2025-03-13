import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ApiRickAndMortyComponent } from './components/api-rick-and-morty/api-rick-and-morty.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CrudComponent } from './components/crud/crud.component';
import { FormsComponent } from './components/crud/forms/forms.component';
import { LoadingComponent } from './components/loading/loading.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'api-rick&morty',
    component: ApiRickAndMortyComponent,
  },
  {
    path: 'toDo-list',
    component: TodoListComponent,
  },
  { path: 'crud', component: CrudComponent },
  { path: 'crud/formulario', component: FormsComponent },
  { path: 'loading', component: LoadingComponent },
];
