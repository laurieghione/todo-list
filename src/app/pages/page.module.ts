import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { TodoListComponent } from './home/components/todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { PageRoutingModule } from './page-routing.module';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [HomeComponent, TodoListComponent, TodoDetailComponent, TodoFormComponent],
  exports: [HomeComponent, TodoListComponent],
  imports: [SharedModule, PageRoutingModule],
  providers: [],
})
export class PageModule {}
