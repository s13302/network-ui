import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmittersListComponent } from './emitters-list/emitters-list.component';
import { EmittersEditComponent } from './emitters-edit/emitters-edit.component';
import { EmittersAddComponent } from './emitters-add/emitters-add.component';

const routes: Routes = [{
  path: '',
  component: EmittersListComponent,
}, {
  path: 'add',
  component: EmittersAddComponent,
}, {
  path: 'edit',
  component: EmittersEditComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmittersRoutingModule { }
