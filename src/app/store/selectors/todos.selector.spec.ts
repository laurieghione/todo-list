import { TodoState } from '../reducers/todos.reducer';
import { selectTodos } from './todos.selector';

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
});
