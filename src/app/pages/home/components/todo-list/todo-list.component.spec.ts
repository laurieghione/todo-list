import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosService } from '@services/todos/todos.service';
import { SharedModule } from '@shared/shared.module';
import { MockTodosService } from 'src/app/core/mocks/todosService.mock';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [SharedModule],
      providers: [{ provide: TodosService, useClass: MockTodosService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

