import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Todo } from 'src/app/core/models/todo.model';
import { TodoState } from 'src/app/store/reducers/todos.reducer';
import { selectTodo } from 'src/app/store/selectors/todos.selector';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  public todo$: Observable<Todo>;

  private subscription: Subscription = new Subscription();

  constructor(private readonly store: Store<TodoState>, private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const todoID: string | null = params.get('id');

      if (todoID) {
        this.todo$ = this.store.select(selectTodo(+todoID));
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
