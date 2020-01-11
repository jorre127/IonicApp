import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ApiStuffService } from '../api-stuff.service';
import { Observable, empty } from 'rxjs';
import { ToastController, ModalController, NavParams } from '@ionic/angular';
import { Anime } from '../app.component';
import { ListDetailPagePage } from '../list-detail-page/list-detail-page.page';
import { ListPage} from '../list/list.page'
import { ActivatedRoute } from '@angular/router';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-anime-detail-page',
	templateUrl: './anime-detail-page.page.html',
	styleUrls: [ './anime-detail-page.page.scss' ]
})
export class AnimeDetailPagePage implements OnInit {
	showAddButton: boolean = true;
	currentAnime: Anime;
	currentDetailAnime:Anime;
	observable: Observable<any>;
	relatedObservable: Observable<any>;
	prequelAnimeList: Array<Anime> = new Array<Anime>();
	sequelAnimeList: Array<Anime> = new Array<Anime>();
	id: number;
	relatedId: number;

	constructor (private data: DataService, private api: ApiStuffService, private toastController: ToastController, private modal: ModalController, private route: ActivatedRoute, private storage: Storage) {}

	
	/*
	ngOnInit () {
		console.log('initialize');
		// Getting Details From Anime
		this.id = parseInt(this.route.snapshot.paramMap.get('id'));
		this.getDetails();
		this.animeList = this.data.getAnimeList();
	}
	async getDetails () {
		const response = this.api.findAnimeDetails(this.id);
		this.currentAnime = JSON.parse((await response).data);
		this.updateButton();
	}
	*/

	ngOnInit () {
		this.id = parseInt(this.route.snapshot.paramMap.get('id'));
		this.observable = this.api.findAnimeDetails(this.id);
		this.observable.subscribe((result) => {
			this.currentAnime = result;
			this.getRelatedDetails();
			this.updateButton();
		});
	}
	addAnimeToList () {
		ListPage.animeList.push(this.currentAnime);
		this.storage.set("animeList",ListPage.animeList);
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
		ListPage.animeList.forEach(anime=>{
			if(anime.mal_id == this.currentAnime.mal_id){
				this.currentDetailAnime = anime;
			}
		})
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
		if(this.currentAnime.related.Sequel != null){
			this.currentAnime.related.Sequel.forEach((anime) => {
				this.relatedId = anime.mal_id;
				this.relatedObservable = this.api.findAnimeDetails(this.relatedId);
				this.relatedObservable.subscribe((result) => {
					this.sequelAnimeList.push(result);
				});
			});
		}
		if(this.currentAnime.related.Prequel != null){
			this.currentAnime.related.Prequel.forEach((anime) => {
				this.relatedId = anime.mal_id;
				this.relatedObservable = this.api.findAnimeDetails(this.relatedId);
				this.relatedObservable.subscribe((result) => {
					this.prequelAnimeList.push(result);
				});
			});
		}

	/*
	async getRelatedDetails () {
		this.sequelAnimeList = [];
		this.prequelAnimeList = [];
		if(this.currentAnime.related.Sequel != null){
			this.currentAnime.related.Sequel.forEach(async (anime) => {
				this.relatedId = anime.mal_id;
				const response = this.api.findAnimeDetails(this.relatedId);
				this.tempAnime = JSON.parse((await response).data);
				this.sequelAnimeList.push(this.tempAnime);
			});
		}
		if(this.currentAnime.related.Prequel != null){
			this.currentAnime.related.Prequel.forEach(async (anime) => {
				this.relatedId = anime.mal_id;
				const response = this.api.findAnimeDetails(this.relatedId);
				this.tempAnime = JSON.parse((await response).data);
				this.prequelAnimeList.push(this.tempAnime);
			});
		}
		*/
	}
	doRefresh(event){
		this.getRelatedDetails();
		setTimeout(() => {
			event.target.complete();
		  },1000)
	}
}
