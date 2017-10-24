import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { ActivityComponent } from './activity/activity.component';
import {ActivityModule } from './activity/activity.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ActivityModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
