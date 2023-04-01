import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  myForm!: FormGroup;

  constructor( private service: UserDataService){
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.minLength(2)),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.minLength(9), Validators.maxLength(11)]),
    })
  }

  submit(){
    console.log(this.myForm.value);
    this.service.send(this.myForm.value);
  }

}
