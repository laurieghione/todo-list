import { Todo } from '@models/todo.model';
import { createReducer, on } from '@ngrx/store';
import { getTodoList, getTodoListSuccess, updateTodo } from '../actions/todos.action';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [],
};

export const todosFeatureKey = 'todosStore';

export const todosReducer = createReducer(
  initialState,
  on(getTodoList, (state) => ({ ...state })),
  on(getTodoListSuccess, (state, { todos }) => ({ ...state, todos })),
  on(updateTodo, (state, { todo }) => ({
    ...state,
    todos: todo.active
      ? state.todos.map((t: Todo) => (t.id === todo.id ? todo : t))
      : [...state.todos.filter((t: Todo) => t.id !== todo.id), { ...todo, closed: true }],
  })),
);
