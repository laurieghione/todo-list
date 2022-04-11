import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosService } from '@services/todos/todos.service';
import { SharedModule } from '@shared/shared.module';
import { MockTodosService } from 'src/app/core/mocks/todosService.mock';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoState } from 'src/app/store/reducers/todos.reducer';
import { Todo } from '@models/todo.model';
import { selectTodos } from 'src/app/store/selectors/todos.selector';
import { RouterTestingModule } from '@angular/router/testing';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let store: MockStore<TodoState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [SharedModule, RouterTestingModule],
      providers: [{ provide: TodosService, useClass: MockTodosService }, provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    store.overrideSelector(selectTodos, [
      { id: 0, label: 'todo 1', active: false },
      { id: 1, label: 'todo 2', active: true },
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should updateTodo when onCheck is called', () => {
    spyOn(store, 'dispatch');
    const todo: Todo = { active: true } as Todo;
    component.onCheck(todo);

    expect(store.dispatch).toHaveBeenCalledWith(Object({ todo: { active: false }, type: '[Todos] Update Todo' }));
  });
});
