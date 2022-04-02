import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '@models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private endpoint = `${environment.apiUrl}/todos`;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.endpoint);
  }
}
