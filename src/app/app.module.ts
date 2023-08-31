import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WelcomeComponent} from "./welcoming/components/welcome/welcome.component";
import { RegisterDeveloperComponent } from './welcoming/components/register-developer/register-developer.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterDeveloperComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
