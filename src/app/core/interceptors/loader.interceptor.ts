import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { TodoState } from 'src/app/store/reducers/todos.reducer';
import { hideLoader, showLoader } from 'src/app/store/actions/todos.action';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private readonly store: Store<TodoState>) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.store.dispatch(showLoader());

    return next.handle(request).pipe(finalize(() => this.store.dispatch(hideLoader())));
  }
}
