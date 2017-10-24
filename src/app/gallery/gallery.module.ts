import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService } from './gallery.service';
import { GalleryComponent } from './gallery.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [GalleryComponent],
  providers: [GalleryService],
  exports: [GalleryComponent,FormsModule]
})
export class GalleryModule { }
