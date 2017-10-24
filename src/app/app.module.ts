import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FundRaisingModule} from './fund-raising/fund-raising.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FundRaisingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
