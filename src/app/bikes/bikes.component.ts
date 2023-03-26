import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { BikeList } from './bikeList';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikes: BikeList[] = [];
  
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getData().subscribe((d: any) => this.bikes = d)
  }



}
