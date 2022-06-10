import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakeupComponent } from './makeup/makeup.component';
import { MakeupDetailComponent } from './makeup-detail/makeup-detail.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { HomepageComponent } from './homepage/homepage.component';
//import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeupComponent,
    MakeupDetailComponent,
    MessagesComponent,
    HomepageComponent,
    //HeroesComponent
  ],
  imports:  [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent
  ],
  // declarations: [
  //   AppComponent,
  //   HeroesComponent
  // ],
})
export class AppModule { }
