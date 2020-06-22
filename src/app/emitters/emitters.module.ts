import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmittersRoutingModule } from './emitters-routing.module';
import { EmittersListComponent } from './emitters-list/emitters-list.component';
import { EmittersEditComponent } from './emitters-edit/emitters-edit.component';
import { EmittersAddComponent } from './emitters-add/emitters-add.component';

@NgModule({
  declarations: [EmittersListComponent, EmittersEditComponent, EmittersAddComponent],
  imports: [
    CommonModule,
    EmittersRoutingModule
  ]
})
export class EmittersModule { }
