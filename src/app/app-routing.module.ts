import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { OrderComponent } from './order/order.component';
import { TechnologyComponent } from './technology/technology.component';


const routes: Routes = [
    { path: '', component: LandingPageComponent},
	{ path: 'order', component: OrderComponent},
	{ path: 'team', component: OurTeamComponent},
	{ path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
