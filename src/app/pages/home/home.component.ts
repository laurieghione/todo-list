import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTodoList } from 'src/app/store/actions/todos.action';
import { TodoState } from 'src/app/store/reducers/todos.reducer';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private readonly store: Store<TodoState>) {
    this.store.dispatch(getTodoList());
  }
}
