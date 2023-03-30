import { Component, OnInit } from '@angular/core';
import { BikeList } from '../bikes/bikeList';
import { HttpService } from '../bikes/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit{

  bikes: BikeList[] = [];


  constructor(private http: HttpService){}

  ngOnInit() {
    this.http.getData().subscribe((d: any) => this.bikes = d)
  }

}
