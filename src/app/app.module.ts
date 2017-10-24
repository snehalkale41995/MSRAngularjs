import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {FundRaisingModule} from './fund-raising/fund-raising.module';
=======


import {MembersModule } from './members/members.module';

>>>>>>> 412227b1cae194b32db6c7b8c02538a4b793423e
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {RegistrationModule } from './registration/registration.module';
import {GalleryModule} from './gallery/gallery.module';
import {ActivityModule} from './activity/activity.module';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
    FundRaisingModule
=======

    BrowserModule,

    FormsModule,
    RegistrationModule,
    GalleryModule,
    ActivityModule,
    MembersModule,
    


>>>>>>> 412227b1cae194b32db6c7b8c02538a4b793423e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
