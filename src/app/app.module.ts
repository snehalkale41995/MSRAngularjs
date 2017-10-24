import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    BrowserModule,
    FormsModule,
    RegistrationModule,
    GalleryModule,
     ActivityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
