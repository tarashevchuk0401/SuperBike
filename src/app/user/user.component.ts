import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit{

  userName: string = '';
  userEmail: string = '';
  userPhone: number = 0;

  constructor(private servcie: UserDataService){}

  ngOnInit(): void {
    this.servcie.subject.subscribe((d:any) => {
      this.userName = d.name;
      this.userEmail = d.email;
      this.userPhone = d.phone;
    } );
    
  }
}
