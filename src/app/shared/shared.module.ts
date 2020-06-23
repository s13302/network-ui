import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponentComponent } from './errors-component/errors-component.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ErrorsComponentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ErrorsComponentComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
