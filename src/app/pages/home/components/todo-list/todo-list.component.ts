import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '@models/todo.model';
import { TodoState } from 'src/app/store/reducers/todos.reducer';
import { Store } from '@ngrx/store';
import { getTodoList, updateTodo } from 'src/app/store/actions/todos.action';
import { selectTodos } from 'src/app/store/selectors/todos.selector';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]>;

  constructor(private readonly store: Store<TodoState>) {
    this.store.dispatch(getTodoList());
  }

  ngOnInit(): void {
    this.todos$ = this.store.select(selectTodos);
  }

  public onCheck(todo: Todo): void {
    this.store.dispatch(updateTodo({ todo: { ...todo, active: !todo.active } }));
    this.todos$ = this.store.select(selectTodos);
  }
}
