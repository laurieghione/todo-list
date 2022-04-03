import { TodoState } from '../reducers/todos.reducer';
import { selectTodo, selectTodos } from './todos.selector';

describe('TodoSelector', () => {
  const initialState: TodoState = {
    todos: [
      { id: 0, label: 'todo1Title', active: true },
      { id: 1, label: 'todo2Title', active: false },
    ],
  };

  it('should select todos list', () => {
    const result = selectTodos.projector(initialState);
    expect(result).toEqual(initialState.todos);
  });

  it('should select todo', () => {
    const result = selectTodo(1).projector(initialState);
    expect(result).toEqual(initialState.todos[1]);
  });

  it('should return null when selectTodo is called with empty todos', () => {
    const result = selectTodo(2).projector({ todos: [] });
    expect(result).toBeNull();
  });
});
