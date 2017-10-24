import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReportsModule} from './reports/reports.module';




//import {MembersModule } from './members/members.module';
import {FundRaisingModule} from './fund-raising/fund-raising.module';
import {MembersModule } from './members/members.module';
import { FormsModule } from '@angular/forms';
import {RegistrationModule } from './registration/registration.module';
import {GalleryModule} from './gallery/gallery.module';
import {ActivityModule} from './activity/activity.module';


@NgModule({
  declarations: [

    AppComponent,


   

    AppComponent
  ],
  
  imports: [

    BrowserModule,
<<<<<<< Updated upstream

    FormsModule,
    RegistrationModule,
    GalleryModule,
    ActivityModule,
    MembersModule,
    ReportsModule,
    FundRaisingModule,
=======

    BrowserModule,
=======

    BrowserModule,
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    ActivityModule, 
     MembersModule

   
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
