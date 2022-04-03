import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/models/todo.model';
import { getTodoList } from 'src/app/store/actions/todos.action';
import { TodoState } from 'src/app/store/reducers/todos.reducer';
import { selectTodo } from 'src/app/store/selectors/todos.selector';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  public todo$: Observable<Todo>;

  constructor(private readonly store: Store<TodoState>, private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const todoID: string | null = params.get('id');

      if (todoID) {
        this.todo$ = this.store.select(selectTodo(+todoID));
      }
    });
  }
}
