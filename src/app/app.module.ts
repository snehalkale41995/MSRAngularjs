import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import {ReportsModule} from './reports/reports.module';
=======


import {MembersModule } from './members/members.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {RegistrationModule } from './registration/registration.module';
import {GalleryModule} from './gallery/gallery.module';
import {ActivityModule} from './activity/activity.module';


>>>>>>> 412227b1cae194b32db6c7b8c02538a4b793423e

@NgModule({
  declarations: [
    AppComponent
<<<<<<< HEAD
  ],
  imports: [ 
    BrowserModule,
    ReportsModule
  ],
=======

  ],
  imports: [

    BrowserModule,

    FormsModule,
    RegistrationModule,
    GalleryModule,
    ActivityModule,
    MembersModule,
    


  ],
  providers: [],
>>>>>>> 412227b1cae194b32db6c7b8c02538a4b793423e
  bootstrap: [AppComponent]
})
export class AppModule { }
