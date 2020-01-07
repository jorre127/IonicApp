import { Component, OnInit } from '@angular/core';
import { ApiStuffService } from '../api-stuff.service';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Anime } from '../app.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';



@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: [ 'home.page.scss' ]
})
export class HomePage implements OnInit {
	list: Array<boolean> = [ true, false, false, false ];
	ObservableSeasonal: Observable<any>;
	ObservableUpcoming: Observable<any>;
	ObservableSchedule: Observable<any>;
	seasonalAnimeList: Array<Anime>;
	upcomingAnimeList: Array<Anime>;
	schedule: Array<Array<Anime>> = new Array<Array<Anime>>();
	daysOfWeek: Array<String> = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

	responseObject: containsAnime;

	constructor (private api: ApiStuffService) {}
	ngOnInit () {
		this.getSeasonalAnime();
		this.getUpcomingAnime();
		this.getScheduledAnime();
	}

	async getSeasonalAnime () {
		this.ObservableSeasonal = this.api.findSeasonalAnime();
		this.ObservableSeasonal.subscribe((result) => {
			this.seasonalAnimeList = result.anime;
		});
	}
	async getUpcomingAnime () {
		this.ObservableUpcoming = this.api.findUpcomingAnime();
		this.ObservableUpcoming.subscribe((result) => {
			this.upcomingAnimeList = result.anime;
		});
	}
	async getScheduledAnime () {
		this.ObservableSchedule = this.api.findSchedule();
		this.ObservableSchedule.subscribe((result) => {
			this.schedule.push(result.monday);
			this.schedule.push(result.tuesday);
			this.schedule.push(result.wednesday);
			this.schedule.push(result.thursday);
			this.schedule.push(result.friday);
			this.schedule.push(result.saturday);
			this.schedule.push(result.sunday);
		});
	}
}
class containsAnime {
	anime: Array<Anime>;
}
