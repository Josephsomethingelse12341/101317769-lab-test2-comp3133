import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Launch {
  mission_name: string;
  launch_year: string;
  details: string;
  mission_patch_small: ImageBitmap;
}

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  title = 'lab-test2';
  launches: any;
  filterYear: string = '';
  flights = 'https://api.spacexdata.com/v3/launches'
  selectedMission: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(this.flights).subscribe((res) => {
      this.launches = res;
      console.log(this.launches);
    })
  }

  filterByYear() {
    this.http
      .get(`https://api.spacexdata.com/v3/launches?launch_year=${this.filterYear}`)
      .subscribe((res) => {
        this.launches = res;
      });
    }

    selectMission(mission: any) {
      this.selectedMission = mission;
      this.router.navigate(['/missiondetails'], { state: { mission: this.selectedMission } });
    }


}
