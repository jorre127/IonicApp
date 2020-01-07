import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ApiStuffService } from '../api-stuff.service';
import { Observable, empty } from 'rxjs';
import { ToastController, ModalController, NavParams } from '@ionic/angular';
import { Anime } from '../app.component';
import { ListDetailPagePage } from '../list-detail-page/list-detail-page.page';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-anime-detail-page',
	templateUrl: './anime-detail-page.page.html',
	styleUrls:
		[
			'./anime-detail-page.page.scss'
		]
})
export class AnimeDetailPagePage implements OnInit {
	showAddButton: boolean = true;
	currentAnime: Anime;
	currentDetailAnime: Anime;
	observable: Observable<any>;
	animeList: Array<Anime> = new Array<Anime>();
	id: number;

	constructor (private data: DataService, private api: ApiStuffService, private toastController: ToastController, private modal: ModalController,private route:ActivatedRoute) {}

/* For Phone
	ngOnInit () {
		console.log('initialize');
		// Getting Details From Anime
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
		this.getDetails();
		this.animeList = this.data.getAnimeList();
	}
	async getDetails () {
		const response = this.api.findAnimeDetails(this.id);
		this.currentAnime = JSON.parse((await response).data);
		this.updateButton();
  }
  */
  

  ngOnInit(){
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.observable = this.api.findAnimeDetails(this.id);
    this.observable.subscribe(result=>{
      this.currentAnime = result;
      this.updateButton();
    })
    this.animeList = this.data.getAnimeList();
  }

	addAnimeToList () {
		this.data.addAnimeToList(this.currentAnime);
		this.updateButton();
		this.presentToast(this.currentAnime.title + ' added to your list');
		this.openDetailPage();
	}

	async updateButton () {
		if (this.animeList.length > 0) {
			this.animeList.forEach((anime) => {
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
		this.animeList.forEach((anime) => {
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
}
