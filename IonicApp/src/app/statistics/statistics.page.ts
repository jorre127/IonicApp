import { Component, OnInit } from '@angular/core';
import { ApiStuffService } from '../api-stuff.service';
import { profile } from '../app.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  profile:profile;
  observable:Observable<any>;

  constructor(private api:ApiStuffService) { }

  ngOnInit() {
    this.observable = this.api.getUserDetails();
    this.observable.subscribe(result=>{
      this.profile = result;
      this.profile.anime_stats.days_watched;
    })
  }

}
