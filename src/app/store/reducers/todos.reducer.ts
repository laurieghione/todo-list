import { Todo } from '@models/todo.model';
import { createReducer, on } from '@ngrx/store';
import {
  createTodo,
  getTodoList,
  getTodoListSuccess,
  hideLoader,
  showLoader,
  updateTodo,
} from '../actions/todos.action';

export interface TodoState {
  todos: Todo[];
  isLoading: boolean;
}

export const initialState: TodoState = {
  todos: [],
  isLoading: false,
};

export const todosFeatureKey = 'todosStore';

export const todosReducer = createReducer(
  initialState,
  on(getTodoList, (state) => ({ ...state })),
  on(showLoader, (state) => ({ ...state, isLoading: true })),
  on(hideLoader, (state) => ({ ...state, isLoading: false })),
  on(getTodoListSuccess, (state, { todos }) => ({ ...state, todos })),
  on(updateTodo, (state, { todo }) => ({
    ...state,
    todos: todo.active
      ? state.todos.map((t: Todo) => (t.id === todo.id ? todo : t))
      : [...state.todos.filter((t: Todo) => t.id !== todo.id), { ...todo, closed: true }],
  })),
  on(createTodo, (state, { todo }) => ({
    ...state,
    todos: [{ ...todo }, ...state.todos],
  })),
);
