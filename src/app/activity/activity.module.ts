import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivityComponent } from './activity.component';
import {ActivityService} from './activity.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ActivityComponent],
  providers:[ActivityService],
  exports:[ActivityComponent]
})
export class ActivityModule { }
