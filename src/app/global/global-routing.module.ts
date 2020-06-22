import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalEditComponent } from './global-edit/global-edit.component';

const routes: Routes = [{
  path: '',
  component: GlobalEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalRoutingModule { }
