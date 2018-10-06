import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-us-edit',
  templateUrl: './us-edit.component.html',
  styleUrls: ['./us-edit.component.css']
})



export class UsEditComponent implements OnInit {

  cities: City[];
  selectedCity: City;


  constructor() {
    
   }

  ngOnInit() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

}
