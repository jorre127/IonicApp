import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Anime } from '../app.component';

@Component({
	selector: 'app-list-detail-page',
	templateUrl: './list-detail-page.page.html',
	styleUrls: [ './list-detail-page.page.scss' ]
})
export class ListDetailPagePage implements OnInit {
	anime: Anime;
	episodesWatched: number;
	watchStatus: string;
	score: string;

	constructor(private modal: ModalController, private nav: NavParams) {}


	ngOnInit() {
		this.anime = this.nav.get('anime');

		this.episodesWatched = this.anime.episodesWatched;
		this.watchStatus = this.anime.watchStatus;
		this.score = this.anime.userScoreString;
	}

	checkEpisodesWatched() {
		if (this.episodesWatched < 0) {
			this.episodesWatched = 0;
		}
		if (this.episodesWatched > this.anime.episodes) {
			this.episodesWatched = this.anime.episodes;
		}
	}

	add() {
		this.episodesWatched++;
		this.checkEpisodesWatched();
	}

	save() {
		this.anime.episodesWatched = this.episodesWatched;
		this.anime.watchStatus = this.watchStatus;
		this.anime.userScoreString = this.score;
		this.dismiss();
	}

	dismiss() {
		// using the injected ModalController this page
		// can "dismiss" itself and optionally pass back data
		this.modal.dismiss({
			dismissed: true
		});
	}
}
