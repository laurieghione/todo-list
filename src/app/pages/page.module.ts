import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { TodoListComponent } from './home/components/todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [HomeComponent, TodoListComponent],
  exports: [HomeComponent, TodoListComponent],
  imports: [SharedModule, PageRoutingModule],
  providers: [],
})
export class PageModule {}
