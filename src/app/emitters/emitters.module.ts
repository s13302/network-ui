import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmittersRoutingModule } from './emitters-routing.module';
import { EmittersListComponent } from './emitters-list/emitters-list.component';
import { EmittersEditComponent } from './emitters-edit/emitters-edit.component';
import { EmittersEditPcapComponent } from './emitters-edit/emitters-edit-pcap/emitters-edit-pcap.component';
import { EmittersEditSocketComponent } from './emitters-edit/emitters-edit-socket/emitters-edit-socket.component';
import { EmittersAddComponent } from './emitters-add/emitters-add.component';
import { SharedModule } from '../shared/shared.module';
import { EmitterTypeDescriptionComponent } from './emitter-type-description/emitter-type-description.component';

@NgModule({
  declarations: [
    EmittersListComponent,
    EmittersEditComponent,
    EmittersAddComponent,
    EmittersEditPcapComponent,
    EmittersEditSocketComponent,
    EmitterTypeDescriptionComponent,
  ],
  imports: [
    CommonModule,
    EmittersRoutingModule,
    SharedModule,
  ]
})
export class EmittersModule { }
