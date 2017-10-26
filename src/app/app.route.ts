import {Routes} from '@angular/router';
import {ActivityComponent} from './activity/activity.component';
import {FundRaisingComponent} from './fund-raising/fund-raising.component' ;
import {GalleryComponent} from './gallery/gallery.component';
import {MembersComponent} from './members/members.component';
import {RegistrationComponent} from './registration/registration.component';
import {ReportsComponent} from './reports/reports.component';
import {MemberslistComponent} from './members/memberslist/memberslist.component';

export const appRoutes : Routes = [
{
    path:'activity',
    component:ActivityComponent
},

{
    path:'fundraising',
    component:FundRaisingComponent
},

{
    path:'gallery',
    component:GalleryComponent
},

{
    path:'members',
    component:MembersComponent,
    children: [ 
	    {
		path: 'memberslist',
		component:MemberslistComponent
	    }
    ]

},

{
    path:'registration',
    component:RegistrationComponent
},
{
    path:'reports',
    component:ReportsComponent
}

];