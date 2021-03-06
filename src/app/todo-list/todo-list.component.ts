import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '@models/todo.model';
import { TodoState } from 'src/app/store/reducers/todos.reducer';
import { Store } from '@ngrx/store';
import { updateTodo } from 'src/app/store/actions/todos.action';
import { selectTodos } from 'src/app/store/selectors/todos.selector';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public todos$: Observable<Todo[]> = this.store.select(selectTodos);

  constructor(private readonly store: Store<TodoState>) {}

  public onCheck(todo: Todo): void {
    this.store.dispatch(updateTodo({ todo: { ...todo, active: !todo.active } }));
  }
}
