import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { MockTodosService } from 'src/app/core/mocks/todosService.mock';
import { TodosService } from 'src/app/core/services/todos/todos.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoState } from 'src/app/store/reducers/todos.reducer';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let todosService: TodosService;
  let store: Store<TodoState>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [SharedModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [provideMockStore(), { provide: TodosService, useClass: MockTodosService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    todosService = TestBed.inject(TodosService);
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create full todo when onSubmit is called', () => {
    spyOn(todosService, 'create').and.returnValue(of({ id: 0, label: 'test', active: false }));
    spyOn(store, 'dispatch');
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));

    component.todoForm.patchValue({ title: 'test', description: 'desc' });

    component.onSubmit();

    expect(todosService.create).toHaveBeenCalledWith({ label: 'test', description: 'desc', active: false });
    expect(router.navigate).toHaveBeenCalledWith(['']);
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should create empty todo when onSubmit is called', () => {
    spyOn(todosService, 'create').and.returnValue(of({ id: 0, label: 'test', active: false }));
    spyOn(store, 'dispatch');
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));

    component.todoForm.patchValue({ title: 'test', description: null });

    component.onSubmit();

    expect(todosService.create).toHaveBeenCalledWith({ label: 'test', description: '', active: false });
    expect(store.dispatch).toHaveBeenCalled();
  });
});
