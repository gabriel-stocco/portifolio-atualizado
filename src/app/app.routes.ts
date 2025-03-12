import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ApiRickAndMortyComponent } from './components/api-rick-and-morty/api-rick-and-morty.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

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
];
