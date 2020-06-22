import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [{
  path: '',
  component: LandingPageComponent,
}, {
  path: 'emitters',
  loadChildren: () => import('./emitters/emitters.module').then(m => m.EmittersModule)
}, {
  path: 'global',
  loadChildren: () => import('./global/global.module').then(m => m.GlobalModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
