import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '@models/todo.model';
import { TodosService } from '@services/todos/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public todos: Observable<Todo[]>;

  constructor(private readonly todosService: TodosService) {
    this.todos = this.todosService.getAll();
  }
}
