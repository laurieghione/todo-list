import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoFormRoutingModule } from './todo-form-routing.module';

@NgModule({
  declarations: [TodoFormComponent],
  imports: [SharedModule, TodoFormRoutingModule],
})
export class TodoFormModule {}
