import {
  createTodo,
  getTodoList,
  getTodoListSuccess,
  hideLoader,
  showLoader,
  updateTodo,
} from '../actions/todos.action';
import { initialState, todosReducer, TodoState } from './todos.reducer';

let todoState: TodoState;

describe('TodoReducer', () => {
  beforeEach(() => {
    todoState = {
      todos: [
        { id: 0, label: 'todo 1', active: true },
        { id: 1, label: 'todo 2', active: false },
      ],
      isLoading: false,
    };
  });

  it('should return the default state', () => {
    const action = {
      type: 'Unknown',
    };
    const state = todosReducer(initialState, action);

    expect(state).toBe(initialState);
  });

  it('should retrieve all todos and update the state when getTodoListSuccess is called', () => {
    const newState: TodoState = {
      todos: [{ id: 0, label: 'todo1', active: false }],
      isLoading: false,
    };
    const action = getTodoListSuccess({
      todos: [...newState.todos],
    });

    const state = todosReducer(initialState, action);

    expect(state).toEqual(newState);
  });

  it('should get todos when getTodoList is called', () => {
    const action = getTodoList();

    const state = todosReducer(todoState, action);

    expect(state.todos.length).toEqual(2);
    expect(state.todos[0].id).toEqual(0);
    expect(state.todos[1].id).toEqual(1);
  });

  it('should isLoading return true when showLoader is called', () => {
    const action = showLoader();

    const state = todosReducer(todoState, action);

    expect(state.isLoading).toBeTrue();
  });

  it('should isLoading return false when hideLoader is called', () => {
    const action = hideLoader();

    const state = todosReducer(todoState, action);

    expect(state.isLoading).toBeFalse();
  });

  it('should create a todo a the top and update the state when updateTodo is called', () => {
    const action = createTodo({
      todo: { label: 'todo 1', description: 'test description', active: false },
    });

    const state = todosReducer(todoState, action);

    expect(state.todos[0].label).toEqual('todo 1');
    expect(state.todos[0].description).toEqual('test description');
    expect(state.todos[0].active).toBeFalse();
  });

  it('should update a todo done to undone, move and update the state when updateTodo is called', () => {
    const action = updateTodo({
      todo: { id: 0, label: 'todo 1', active: false },
    });

    const state = todosReducer(todoState, action);

    expect(state.todos[0].id).toEqual(1);
    expect(state.todos[0].active).toBeFalse();
    expect(state.todos[1].id).toEqual(0);
    expect(state.todos[1].active).toBeFalse();
    expect(state.todos[1].closed).toBeTrue();
  });

  it('should update a todo undone to done and update the state when updateTodo is called', () => {
    const action = updateTodo({
      todo: { id: 1, label: 'todo 1', active: true },
    });

    const state = todosReducer(todoState, action);

    expect(state.todos[0].id).toEqual(0);
    expect(state.todos[0].active).toBeTrue();
    expect(state.todos[0].closed).toBeUndefined();
    expect(state.todos[1].id).toEqual(1);
    expect(state.todos[1].active).toBeTrue();
    expect(state.todos[1].closed).toBeUndefined();
  });
});
