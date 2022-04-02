import { HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoaderService } from '@services/loader/loader.service';
import { of } from 'rxjs';
import { MockLoaderService } from '../mocks/loaderService.mock';
import { LoaderInterceptor } from './loader.interceptor';

describe('LoaderInterceptor', () => {
  let loaderService: LoaderService;
  let interceptor: LoaderInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoaderInterceptor, { provide: LoaderService, useClass: MockLoaderService }],
    });

    interceptor = TestBed.inject(LoaderInterceptor);
    loaderService = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should show and hide loader when intercept is called', fakeAsync(() => {
    spyOn(loaderService, 'show');
    spyOn(loaderService, 'hide');

    const next: any = {
      handle: () => {
        return of((subscriber: any) => {
          subscriber.complete();
        });
      },
    };

    const requestMock = new HttpRequest('GET', '/test');

    interceptor.intercept(requestMock, next).subscribe(() => {
      expect(loaderService.show).toHaveBeenCalled();
    });

    tick();

    expect(loaderService.hide).toHaveBeenCalled();
  }));
});

