import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodosService } from './todos.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    spyOn(http, 'get').and.returnValue(of(true));
    service.getAll();

    expect(http.get).toHaveBeenCalledWith(`${environment.apiUrl}/todos`);
  });
});
