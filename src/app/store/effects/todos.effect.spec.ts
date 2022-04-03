import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { TodoEffects } from './todos.effect';
import { Todo } from 'src/app/core/models/todo.model';
import { TodosService } from 'src/app/core/services/todos/todos.service';
import { MockTodosService } from 'src/app/core/mocks/todosService.mock';
import { initialState, todosReducer, TodoState } from '../reducers/todos.reducer';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getTodoList, getTodoListFailed, getTodoListSuccess } from '../actions/todos.action';
import { rootEffectsInit } from '@ngrx/effects';

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

  it('should dispatch getTodoListSuccess action when getTodoList is called', (done) => {
    const mockedTodos: Todo[] = [{ id: 0, label: 'aTitle', active: true }];

    spyOn(todoService, 'getAll').and.returnValue(of(mockedTodos));

    actions = of(getTodoList);

    effects.getTodoList$.subscribe((res: any) => {
      expect(res).toEqual(getTodoListSuccess({ todos: [{ id: 0, label: 'aTitle', active: true }] }));
      expect(todoService.getAll).toHaveBeenCalled();
      done();
    });
  });

  it('should dispatch getTodoListFailed action when getTodoList is called with error', (done) => {
    spyOn(todoService, 'getAll').and.returnValue(throwError(() => new Error('500')));

    actions = of(getTodoList);

    effects.getTodoList$.subscribe((res: any) => {
      expect(res).toEqual(getTodoListFailed());
      expect(todoService.getAll).toHaveBeenCalled();
      done();
    });
  });

  it('should dispatch getTodoList action when init is called', () => {
    actions = of(rootEffectsInit);

    effects.init$.subscribe((res: any) => {
      expect(res).toEqual(getTodoList());
    });
  });
});
