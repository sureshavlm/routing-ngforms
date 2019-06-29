import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './home/mission.component';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, ContactComponent, MissionComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
