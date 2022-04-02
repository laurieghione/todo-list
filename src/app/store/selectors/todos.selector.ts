import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todosFeatureKey, TodoState } from '../reducers/todos.reducer';

export const selectTodosState = createFeatureSelector<TodoState>(todosFeatureKey);

export const selectTodos = createSelector(selectTodosState, (state: TodoState) => state.todos);
