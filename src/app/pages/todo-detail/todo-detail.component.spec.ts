import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoState } from 'src/app/store/reducers/todos.reducer';
import { selectTodo } from 'src/app/store/selectors/todos.selector';

import { TodoDetailComponent } from './todo-detail.component';

describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;
  let store: MockStore<TodoState>;

  const mockActivatedRoute = {
    paramMap: of(convertToParamMap({ id: 1 })),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoDetailComponent],
      imports: [SharedModule],
      providers: [provideMockStore(), { provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    spyOn(store, 'select');
    fixture.detectChanges();
    expect(store.select).toHaveBeenCalledWith(jasmine.any(Function));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
