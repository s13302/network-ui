import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { EmittersEditPcapComponent } from './emitters-edit-pcap/emitters-edit-pcap.component';
import { EmittersEditSocketComponent } from './emitters-edit-socket/emitters-edit-socket.component';
import { EmitterTypeComponent } from './emitter-type/emitter-type.component';

@NgModule({
  declarations: [
    EmittersEditPcapComponent,
    EmittersEditSocketComponent,
    EmitterTypeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    EmitterTypeComponent,
  ]
})
export class EmitterTypePluginModule { }
