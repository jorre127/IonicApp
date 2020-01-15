import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Anime, MalAnime } from '../app.component';
import { ListPage } from '../list/list.page';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-list-detail-page',
	templateUrl: './list-detail-page.page.html',
	styleUrls: [ './list-detail-page.page.scss' ]
})
export class ListDetailPagePage implements OnInit {
	anime: MalAnime;
	animeList:Array<MalAnime>;
	episodesWatched: number;
	watchStatus: string;
	score: string;

	listpage: ListPage;

	constructor (private modal: ModalController, private nav: NavParams, private data:DataService,private storage:Storage) {}

	ngOnInit () {
		this.anime = this.nav.get('anime');
		this.animeList = this.nav.get('animeList');
		this.listpage = this.nav.get('list');

		this.episodesWatched = this.anime.watched_episodes;
		this.watchStatus = this.anime.watching_status.toString();
		this.score = this.anime.score.toString();
	}

	checkEpisodesWatched () {
		if (this.episodesWatched < 0) {
			this.episodesWatched = 0;
		}
		if (this.episodesWatched > this.anime.total_episodes) {
			this.episodesWatched = this.anime.total_episodes;
		}
	}
	checkWatchStatus(){
		if(<number><unknown>this.watchStatus == 2){
			this.episodesWatched = this.anime.total_episodes;
		}
	}

	add () {
		this.episodesWatched++;
		this.checkEpisodesWatched();
	}

	save () {
		this.anime.watching_status = <number><unknown>this.watchStatus;
		this.anime.watched_episodes = this.episodesWatched;
		this.anime.score = <number><unknown>this.score;
		if (this.listpage != null) {
			this.listpage.sortAnime();
		}
		this.storage.set("animeList",ListPage.animeList);
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
