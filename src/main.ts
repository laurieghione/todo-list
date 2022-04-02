import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { injectMocks } from 'data-mocks';

import { AppModule } from './app/app.module';
import { MockTodosService } from './app/core/mocks/todosService.mock';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
} else {
  injectMocks(MockTodosService.todosScenarios);
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

