import { Component, OnInit } from '@angular/core';
import { MembersService } from './members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private membersService: MembersService) { }

  ngOnInit() {
  }

}
