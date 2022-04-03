import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todosFeatureKey, TodoState } from '../reducers/todos.reducer';

export const getState = createFeatureSelector<TodoState>(todosFeatureKey);

export const selectTodos = createSelector(getState, (state: TodoState) => state.todos);

export const selectTodo = (id: number) =>
  createSelector(getState, (state: TodoState) =>
    state.todos.length ? state.todos.find((todo) => todo.id === id) : null,
  );
