import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GalleryModule} from './gallery/gallery.module';
import { AppComponent } from './app.component';
// import { ActivityComponent } from './activity/activity.component';
import {ActivityModule } from './activity/activity.module';

@NgModule({
  declarations: [
    AppComponent
    
    
  ],
  imports: [
    BrowserModule,
    ActivityModule,  
    GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
