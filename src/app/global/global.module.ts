import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { GlobalRoutingModule } from './global-routing.module';
import { GlobalEditComponent } from './global-edit/global-edit.component';

@NgModule({
  declarations: [GlobalEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    GlobalRoutingModule
  ]
})
export class GlobalModule { }
