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


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    AboutComponent,
    BikesComponent,
    ContactComponent,
    UserComponent,
    GetContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
