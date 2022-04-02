import { TestBed } from '@angular/core/testing';
import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should isLoading return true when show is called', () => {
    spyOn(service.isLoading, 'next');
    service.show();

    expect(service.isLoading.next).toHaveBeenCalledWith(true);
  });

  it('should isLoading return false when hide is called', () => {
    spyOn(service.isLoading, 'next');
    service.hide();

    expect(service.isLoading.next).toHaveBeenCalledWith(false);
  });
});
