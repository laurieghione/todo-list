import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo-list',
    loadChildren: () => import('./todo-list/todo-list.module').then((m) => m.TodoListModule),
  },
  {
    path: 'todo/new',
    loadChildren: () => import('./todo-form/todo-form.module').then((m) => m.TodoFormModule),
  },
  {
    path: 'todo/:id',
    loadChildren: () => import('./todo-detail/todo-detail.module').then((m) => m.TodoDetailModule),
  },
  {
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
