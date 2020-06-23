import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmittersRoutingModule } from './emitters-routing.module';
import { EmittersListComponent } from './emitters-list/emitters-list.component';
import { EmittersEditComponent } from './emitters-edit/emitters-edit.component';
import { EmittersAddComponent } from './emitters-add/emitters-add.component';
import { SharedModule } from '../shared/shared.module';
import { EmitterTypeDescriptionComponent } from './emitter-type-description/emitter-type-description.component';
import { EmitterTypePluginModule } from './emitter-type-plugin/emitter-type-plugin.module';

@NgModule({
  declarations: [
    EmittersListComponent,
    EmittersEditComponent,
    EmittersAddComponent,
    EmitterTypeDescriptionComponent,
  ],
  imports: [
    CommonModule,
    EmittersRoutingModule,
    SharedModule,
    EmitterTypePluginModule,
  ]
})
export class EmittersModule { }
