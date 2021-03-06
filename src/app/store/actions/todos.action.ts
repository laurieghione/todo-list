import { Todo } from '@models/todo.model';
import { createAction, props } from '@ngrx/store';

export const updateTodo = createAction('[Todos] Update Todo', props<{ todo: Todo }>());
export const createTodo = createAction('[Todos] Create Todo', props<{ todo: Todo }>());
export const getTodoList = createAction('[Todos] Get todo list');
export const getTodoListSuccess = createAction('[Todos] get todo list success', props<{ todos: Todo[] }>());
export const getTodoListFailed = createAction('[Todos] Get todo list failed');
export const showLoader = createAction('[Loader] Show loader');
export const hideLoader = createAction('[Loader] Hide loader');
