import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Anime } from '../app.component';
import { ListPage } from '../list/list.page';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-list-detail-page',
	templateUrl: './list-detail-page.page.html',
	styleUrls: [ './list-detail-page.page.scss' ]
})
export class ListDetailPagePage implements OnInit {
	anime: Anime;
	animeList:Array<Anime>;
	episodesWatched: number;
	watchStatus: string;
	score: string;

	listpage: ListPage;

	constructor (private modal: ModalController, private nav: NavParams, private data:DataService,private storage:Storage) {}

	ngOnInit () {
		this.anime = this.nav.get('anime');
		this.animeList = this.nav.get('animeList');
		this.listpage = this.nav.get('list');

		this.episodesWatched = this.anime.episodesWatched;
		this.watchStatus = this.anime.watchStatus;
		this.score = this.anime.userScoreString;
	}

	checkEpisodesWatched () {
		if (this.episodesWatched < 0) {
			this.episodesWatched = 0;
		}
		if (this.episodesWatched > this.anime.episodes) {
			this.episodesWatched = this.anime.episodes;
		}
	}

	add () {
		this.episodesWatched++;
		this.checkEpisodesWatched();
	}

	save () {
		this.anime.episodesWatched = this.episodesWatched;
		this.anime.watchStatus = this.watchStatus;
		this.anime.userScoreString = this.score;
		if (this.listpage != null) {
			this.listpage.sortAnime();
		}
		this.storage.set("animeList",JSON.stringify(this.animeList));
		this.dismiss();
	}

	dismiss () {
		// using the injected ModalController this page
		// can "dismiss" itself and optionally pass back data
		this.modal.dismiss({
			dismissed: true
		});
	}
}
