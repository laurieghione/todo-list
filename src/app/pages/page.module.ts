import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { TodoListComponent } from './home/components/todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { PageRoutingModule } from './page-routing.module';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  declarations: [HomeComponent, TodoListComponent, TodoDetailComponent],
  exports: [HomeComponent, TodoListComponent],
  imports: [SharedModule, PageRoutingModule],
  providers: [],
})
export class PageModule {}
