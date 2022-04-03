import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { TodoEffects } from './todos.effect';
import { Todo } from 'src/app/core/models/todo.model';
import { TodosService } from 'src/app/core/services/todos/todos.service';
import { MockTodosService } from 'src/app/core/mocks/todosService.mock';
import { initialState, todosReducer, TodoState } from '../reducers/todos.reducer';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getTodoList, getTodoListSuccess } from '../actions/todos.action';

describe('TodoEffects', () => {
  let effects: TodoEffects;
  let actions: Observable<any>;
  let todoService: TodosService;
  let store: MockStore<TodoState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ todosStore: todosReducer })],
      providers: [
        TodoEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions),
        {
          provide: TodosService,
          useClass: MockTodosService,
        },
      ],
    });
    store = TestBed.inject(MockStore);
    todoService = TestBed.inject(TodosService);
    effects = TestBed.inject(TodoEffects);
    actions = of(getTodoList);
  });

  it('should dispatch getTodoListSuccess action when getTodoList is called', () => {
    const mockedTodos: Todo[] = [{ id: 0, label: 'aTitle', active: true }];

    spyOn(todoService, 'getAll').and.returnValue(of(mockedTodos));

    actions = of(getTodoList);

    effects.getTodoList$.subscribe((res: any) => {
      expect(res).toEqual({ todos: [{ id: 0, label: 'aTitle', active: true }], type: '[Todos] get todo list success' });
      expect(todoService.getAll).toHaveBeenCalled();
    });
  });

  it('should dispatch getTodoListFailed action when getTodoList is called with error', () => {
    spyOn(todoService, 'getAll').and.returnValue(throwError(() => new Error('500')));

    actions = of(getTodoList);

    effects.getTodoList$.subscribe((res: any) => {
      expect(res).toEqual({ type: '[Todos] Get todo list failed' });
      expect(todoService.getAll).toHaveBeenCalled();
    });
  });
});
