import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentBaseModule } from './Angular2ComponentKit_Base/module';

import { AppComponent } from './app.component';
import { AddModuleComponent } from './add-module/add-module.component';

@NgModule({
  declarations: [
    AppComponent,
    AddModuleComponent
  ],
  imports: [
    BrowserModule,
    ComponentBaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
