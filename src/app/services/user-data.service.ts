import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  subject = new BehaviorSubject('USER')

  constructor() { }

  send(data: any){
    this.subject.next(data)
  }
}
