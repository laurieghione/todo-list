import { HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { TodoState } from 'src/app/store/reducers/todos.reducer';
import { LoaderInterceptor } from './loader.interceptor';

describe('LoaderInterceptor', () => {
  let interceptor: LoaderInterceptor;
  let store: Store<TodoState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoaderInterceptor, provideMockStore()],
    });

    interceptor = TestBed.inject(LoaderInterceptor);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should show and hide loader when intercept is called', fakeAsync(() => {
    spyOn(store, 'dispatch');
    const next: any = {
      handle: () => {
        return of((subscriber: any) => {
          subscriber.complete();
        });
      },
    };

    const requestMock = new HttpRequest('GET', '/test');

    interceptor.intercept(requestMock, next).subscribe(() => {
      expect(store.dispatch).toHaveBeenCalledWith({ type: '[Loader] Show loader' });
    });

    tick();

    expect(store.dispatch).toHaveBeenCalledWith({ type: '[Loader] Hide loader' });
  }));
});
