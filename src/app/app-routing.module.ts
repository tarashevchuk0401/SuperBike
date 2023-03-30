import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BikesComponent } from './bikes/bikes.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'bikes', component: BikesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'user', component: UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
