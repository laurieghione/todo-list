import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoListRoutingModule } from './todo-list-routing.module';

@NgModule({
  declarations: [TodoListComponent],
  imports: [SharedModule, TodoListRoutingModule],
})
export class TodoListModule {}
