import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoState } from 'src/app/store/reducers/todos.reducer';
import { selectIsLoading } from 'src/app/store/selectors/todos.selector';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  isLoading: Observable<boolean>;

  constructor(private readonly store: Store<TodoState>) {
    this.isLoading = this.store.select(selectIsLoading);
  }
}
