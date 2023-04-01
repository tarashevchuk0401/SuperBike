import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LogoComponent } from './logo/logo.component';
import { AboutComponent } from './about/about.component';
import { BikesComponent } from './bikes/bikes.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { GetContactComponent } from './get-contact/get-contact.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UserDataService } from './services/user-data.service';



@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    AboutComponent,
    BikesComponent,
    ContactComponent,
    UserComponent,
    GetContactComponent,
    FooterComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
