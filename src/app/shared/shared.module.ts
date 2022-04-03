import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HeaderComponent, LoaderComponent],
  exports: [
    CommonModule,
    HeaderComponent,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    LoaderComponent,
    MatCardModule,
  ],
  imports: [CommonModule, MatToolbarModule, MatProgressSpinnerModule],
  providers: [],
})
export class SharedModule {}
