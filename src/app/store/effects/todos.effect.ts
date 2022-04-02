import { Injectable } from '@angular/core';
import { getTodoList, getTodoListFailed, getTodoListSuccess } from '../actions/todos.action';
import { TodosService } from '@services/todos/todos.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Todo } from '@models/todo.model';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private readonly todosService: TodosService) {}

  getTodoList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodoList),
      mergeMap(() =>
        this.todosService.getAll().pipe(
          map((todos: Todo[]) => {
            return getTodoListSuccess({ todos: todos });
          }),
          catchError(() => [getTodoListFailed()]),
        ),
      ),
    ),
  );
}
