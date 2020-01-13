import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ApiStuffService } from '../api-stuff.service';
import { Observable, empty } from 'rxjs';
import { ToastController, ModalController, NavParams, PopoverController } from '@ionic/angular';
import { Anime, Episodes } from '../app.component';
import { ListDetailPagePage } from '../list-detail-page/list-detail-page.page';
import { ListPage } from '../list/list.page';
import { ActivatedRoute } from '@angular/router';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ResourceLoader } from '@angular/compiler';
import { TitlePopoverComponent } from '../title-popover/title-popover.component';
import { TapticEngine } from '@ionic-native/taptic-engine/ngx';

@Component({
	selector: 'app-anime-detail-page',
	templateUrl: './anime-detail-page.page.html',
	styleUrls: [ './anime-detail-page.page.scss' ]
})
export class AnimeDetailPagePage implements OnInit {
	showAddButton: boolean = true;

	currentAnime: Anime;
	tempAnimeSequel: Anime;
	tempAnimePrequel: Anime;
	currentDetailAnime: Anime;

	observable: Observable<any>;
	relatedObservableSequel: Observable<any>;
	relatedObservablePrequel: Observable<any>;
	episodesCheckObservable: Observable<any>;
	lastEpisodeObservable: Observable<any>;

	prequelAnimeList: Array<Anime> = new Array<Anime>();
	sequelAnimeList: Array<Anime> = new Array<Anime>();

	id: number;
	relatedIdSequel: number;
	relatedIdPrequel: number;

	episodesCheck: Episodes;
	lastEpisode: number;

	constructor (private data: DataService, private api: ApiStuffService, private toastController: ToastController, private modal: ModalController, private route: ActivatedRoute, private storage: Storage, private browser: InAppBrowser, private popoverController: PopoverController, private vibration: TapticEngine) {}

	/*
	ngOnInit () {
		// Getting Details From Anime
		this.id = parseInt(this.route.snapshot.paramMap.get('id'));
		this.getDetails();
		this.getRelatedDetails();
	}
	async getDetails () {
		const response = this.api.findAnimeDetails(this.id);
		this.currentAnime = JSON.parse((await response).data);
		this.getRelatedDetails();
		this.updateButton();
		this.getLastEpisode()
	}
*/

	ngOnInit () {
		this.id = parseInt(this.route.snapshot.paramMap.get('id'));
		this.observable = this.api.findAnimeDetails(this.id);
		this.observable.subscribe((result) => {
			this.currentAnime = result;
			this.getRelatedDetails();
			this.updateButton();
			this.getLastEpisode();
		});
	}

	addAnimeToList () {
		ListPage.animeList.push(this.currentAnime);
		this.storage.set('animeList', ListPage.animeList);
		console.log(this.storage);
		this.updateButton();
		this.presentToast(this.currentAnime.title + ' added to your list');
		this.openDetailPage();
	}

	async updateButton () {
		if (ListPage.animeList.length > 0) {
			ListPage.animeList.forEach((anime) => {
				if (anime.mal_id == this.currentAnime.mal_id) {
					this.showAddButton = false;
				}
			});
		}
		else {
			this.showAddButton = true;
		}
	}
	async presentToast (message: string) {
		const toast = await this.toastController.create({
			message: message,
			duration: 2000
		});
		toast.present();
	}
	async openDetailPage () {
		ListPage.animeList.forEach((anime) => {
			if (anime.mal_id == this.currentAnime.mal_id) {
				this.currentDetailAnime = anime;
			}
		});
		const modall = await this.modal.create({
			component: ListDetailPagePage,
			showBackdrop: true,
			cssClass: 'modal',
			componentProps:
				{
					anime: this.currentDetailAnime
				}
		});
		modall.present();
	}

	async getRelatedDetails () {
		this.sequelAnimeList = [];
		this.prequelAnimeList = [];
		if (this.currentAnime.related.Sequel != null) {
			this.currentAnime.related.Sequel.forEach((anime) => {
				setTimeout(() => {
					this.relatedIdSequel = anime.mal_id;
					this.relatedObservableSequel = this.api.findAnimeDetails(this.relatedIdSequel);
					this.relatedObservableSequel.subscribe((result) => {
						this.sequelAnimeList.push(result);
					});
				}, 500);
			});
		}
		if (this.currentAnime.related.Prequel != null) {
			this.currentAnime.related.Prequel.forEach((anime) => {
				setTimeout(() => {
					this.relatedIdPrequel = anime.mal_id;
					this.relatedObservablePrequel = this.api.findAnimeDetails(this.relatedIdPrequel);
					this.relatedObservablePrequel.subscribe((result) => {
						this.prequelAnimeList.push(result);
					});
				}, 500);
			});
		}

		/*
	async getRelatedDetails () {
		this.sequelAnimeList = [];
		this.prequelAnimeList = [];
		if (this.currentAnime.related.Sequel != null) {
			this.currentAnime.related.Sequel.forEach(async (anime) => {
				setTimeout(() => {
					this.relatedIdPrequel = anime.mal_id;
					const response = this.api.findAnimeDetails(this.relatedId);
					this.tempAnimeSequel = JSON.parse((await response).data);
					this.sequelAnimeList.push(this.tempAnime);
				},500);
			});
		}
		if (this.currentAnime.related.Prequel != null) {
			this.currentAnime.related.Prequel.forEach(async (anime) => {
				setTimeout(() => {
					this.relatedIdSequel = anime.mal_id;
					const response = this.api.findAnimeDetails(this.relatedId);
					this.tempAnimePrequel = JSON.parse((await response).data);
					this.prequelAnimeList.push(this.tempAnime);
				},500);

			});
		}
		*/
	}
	doRefresh (event) {
		this.getRelatedDetails();
		this.getLastEpisode();
		setTimeout(() => {
			event.target.complete();
		}, 1000);
	}

	openMal (url: string) {
		const mal = this.browser.create(url, '_system');
	}
	async getLastEpisode () {
		this.episodesCheckObservable = this.api.findAnimeEpisodes(this.currentAnime.mal_id);
		this.episodesCheckObservable.subscribe((result) => {
			this.episodesCheck = result;
			if (this.episodesCheck.episodes_last_page == 1) {
				this.lastEpisode = this.episodesCheck.episodes[this.episodesCheck.episodes.length - 1].episode_id;
			}
			else {
				this.episodesCheckObservable = this.api.findAnimeEpisodes(this.currentAnime.mal_id, this.episodesCheck.episodes_last_page);
				this.episodesCheckObservable.subscribe((result) => {
					this.episodesCheck = result;
					console.log(this.episodesCheck);
					this.lastEpisode = this.episodesCheck.episodes[this.episodesCheck.episodes.length - 1].episode_id;
				});
			}
		});
	}

	async presentPopover (ev: any, title: string, stop: boolean = false) {
		this.vibration.impact({
			style: 'medium' // light | medium | heavy
		});
		const popover = await this.popoverController.create({
			component: TitlePopoverComponent,
			event: ev,
			translucent: false,
			componentProps:
				{
					title: title
				}
		});
		await popover.present();
		setTimeout(() => {
			popover.dismiss();
		}, 2000);
	}
}
