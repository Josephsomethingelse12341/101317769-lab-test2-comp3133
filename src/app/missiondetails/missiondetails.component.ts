import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {

  list = "https://api.spacexdata.com/v3/launches/{{flight_number}}"
  launches: any = [];
  @Input() selectedMission: any;
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedMission);
  }

  
}
