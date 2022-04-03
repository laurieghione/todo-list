import { Injectable } from '@angular/core';
import { getTodoList, getTodoListFailed, getTodoListSuccess } from '../actions/todos.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { TodosService } from '@services/todos/todos.service';
import { Todo } from '@models/todo.model';

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

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => getTodoList()),
    ),
  );
}
