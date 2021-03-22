import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BearComponent } from './bears/bear/bear.component';
import { HttpClientModule } from '@angular/common/http';
import { AllUsersComponent } from './all-users/all-users.component';
import { MaleUsersComponent } from './male/male-users/male-users.component';
import { FemaleUsersComponent } from './female/female-users/female-users.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BearComponent,
    AllUsersComponent,
    MaleUsersComponent,
    FemaleUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
