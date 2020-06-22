import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { EmittersModule } from './emitters/emitters.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GlobalModule } from './global/global.module';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmittersModule,
    GlobalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
