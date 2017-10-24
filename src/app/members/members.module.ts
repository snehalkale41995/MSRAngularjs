import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MembersComponent } from './members.component';
import {MembersService} from './members.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MembersComponent],
  exports:[MembersComponent],
 providers: [MembersService],
  
})
export class MembersModule { }
