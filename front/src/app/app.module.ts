import { HttpModule } from '@angular/http';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
 
import {NgAutoCompleteModule} from "ng-auto-complete";


import { NavComponent } from './nav.component';
import { ViewComponent } from './view.component';
import { WebService} from './web.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { MainviewComponent } from './mainview.component';


var routes =[{
  path:'',
  component: HomeComponent
  },
  {
  path:'login',
  component: LoginComponent
  },
  {
  path:'list/:id',
  component: MainviewComponent
  }
];
@NgModule({
  declarations: [
    NavComponent, AppComponent , ViewComponent , HomeComponent , LoginComponent , MainviewComponent
  ],
  imports: [
    BrowserModule , RouterModule.forRoot(routes) , HttpModule, NgAutoCompleteModule],
  providers: [WebService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
