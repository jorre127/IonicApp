import { Component, OnInit } from '@angular/core';
import { Anime } from '../app.component';
import { ApiStuffService } from '../api-stuff.service';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { NavController } from '@ionic/angular';
import { AnimeDetailPagePage } from '../anime-detail-page/anime-detail-page.page';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-studio-search',
	templateUrl: './studio-search.page.html',
	styleUrls: [ './studio-search.page.scss' ]
})
export class StudioSearchPage implements OnInit {
	studioAnimeList: Array<Anime>;
	studioId: number;
	observableStudio: Observable<any>;

	constructor(private api: ApiStuffService, private data: DataService, private route:ActivatedRoute) {}

	ngOnInit() {
		this.studioId = parseInt(this.route.snapshot.paramMap.get("id"));
		this.observableStudio = this.api.findStudio(this.studioId);
		this.observableStudio.subscribe((result) => {
			this.studioAnimeList = result.anime;
		});
	}

	saveId(id: number) {
		this.data.setId(id);
	}
}
