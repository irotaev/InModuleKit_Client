import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StaticComponentsModule } from './static-components/static-components.module';

import { AppComponent } from './app.component';
import { AddModuleComponent } from './add-module/add-module.component';

@NgModule({
  declarations: [
    AppComponent,
    AddModuleComponent
  ],
  imports: [
    BrowserModule,
    StaticComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
