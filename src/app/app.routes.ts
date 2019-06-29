import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './home/mission.component';

export const routes: Routes = [
	
	{ path: 'home/:name/:id', component: HomeComponent, 
		children: [

					{ path: "mission", component: MissionComponent}
					] 
	},
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)