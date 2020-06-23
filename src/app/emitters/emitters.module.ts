import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { EmittersRoutingModule } from './emitters-routing.module';
import { EmittersListComponent } from './emitters-list/emitters-list.component';
import { EmittersEditComponent } from './emitters-edit/emitters-edit.component';
import { EmittersEditPcapComponent } from './emitters-edit/emitters-edit-pcap/emitters-edit-pcap.component';
import { EmittersEditSocketComponent } from './emitters-edit/emitters-edit-socket/emitters-edit-socket.component';
import { EmittersAddComponent } from './emitters-add/emitters-add.component';
import { MinValidatorDirective } from '../validators/min-validator.directive';
import { MaxValidatorDirective } from '../validators/max-validator.directive';

@NgModule({
  declarations: [
    EmittersListComponent,
    EmittersEditComponent,
    EmittersAddComponent,
    EmittersEditPcapComponent,
    EmittersEditSocketComponent,
    MinValidatorDirective,
    MaxValidatorDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmittersRoutingModule
  ]
})
export class EmittersModule { }
