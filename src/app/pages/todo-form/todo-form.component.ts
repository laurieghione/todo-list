import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/core/models/todo.model';
import { TodosService } from 'src/app/core/services/todos/todos.service';
import { createTodo } from 'src/app/store/actions/todos.action';
import { TodoState } from 'src/app/store/reducers/todos.reducer';

@Component({
  templateUrl: './todo-form.component.html',

  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  public todoForm: FormGroup;

  constructor(
    private readonly store: Store<TodoState>,
    private readonly todosService: TodosService,
    private readonly router: Router,
  ) {
    this.todoForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null),
    });
  }

  get title(): AbstractControl {
    return this.todoForm.get('title');
  }

  get description(): AbstractControl {
    return this.todoForm.get('description');
  }

  public onSubmit(): void {
    const todo: Todo = {
      label: this.title.value,
      description: this.description.value ?? '',
      active: false,
    };

    this.todosService.create(todo).subscribe((newTodo: Todo) => {
      this.store.dispatch(createTodo({ todo: { ...todo, id: newTodo.id } }));
      this.router.navigate(['/home']);
    });
  }
}
