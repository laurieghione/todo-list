import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { TodoDetailRoutingModule } from './todo-detail-routing.module';

@NgModule({
  declarations: [TodoDetailComponent],
  imports: [SharedModule, TodoDetailRoutingModule],
})
export class TodoDetailModule {}
