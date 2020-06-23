import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalRoutingModule } from './global-routing.module';
import { GlobalEditComponent } from './global-edit/global-edit.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GlobalEditComponent,
  ],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    SharedModule
  ]
})
export class GlobalModule { }
