import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodosService } from './todos.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from '../../models/todo.model';

describe('TodosService', () => {
  let service: TodosService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TodosService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data when getAll is called', () => {
    spyOn(http, 'get').and.returnValue(of([{ id: 3 } as Todo]));
    service.getAll();

    expect(http.get).toHaveBeenCalledWith(`${environment.apiUrl}/todos`);
  });

  it('should post data when create is called', () => {
    spyOn(http, 'post').and.returnValue(of({}));
    service.create({ id: 1 } as Todo);

    expect(http.post).toHaveBeenCalledWith(`${environment.apiUrl}/todos`, { id: 1 });
  });

  it('should put data when update is called', () => {
    spyOn(http, 'put').and.returnValue(of({}));
    service.update({ id: 1 } as Todo, 1);

    expect(http.put).toHaveBeenCalledWith(`${environment.apiUrl}/todos/1`, { id: 1 });
  });
});
