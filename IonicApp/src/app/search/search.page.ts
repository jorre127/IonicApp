import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiStuffService } from '../api-stuff.service';
import { Observable, onErrorResumeNext } from 'rxjs';
import { DataService } from '../data.service';
import { Anime } from '../app.component';
@Component({
	selector: 'app-search',
	templateUrl: './search.page.html',
	styleUrls: [ './search.page.scss' ]
})
export class SearchPage implements OnInit {
	searchInput: string;

	observable: Observable<any>;
	animeList: Array<Anime>;
	constructor(private api: ApiStuffService, private data: DataService) {}

	ngOnInit() {}
	search() {
		this.observable = this.api.searchAnime(this.searchInput);
		this.observable.subscribe((result) => (this.animeList = result.results));
	}
	saveId(id: number) {
		this.data.setId(id);
	}
}
