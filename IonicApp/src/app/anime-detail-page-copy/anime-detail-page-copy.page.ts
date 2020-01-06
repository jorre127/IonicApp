import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ApiStuffService } from '../api-stuff.service';
import { Observable, empty } from 'rxjs';
import { ToastController, ModalController } from '@ionic/angular';
import { Anime } from '../app.component';
import { ListDetailPagePage } from '../list-detail-page/list-detail-page.page';

@Component({
	selector: 'app-anime-detail-page-copy',
	templateUrl: './anime-detail-page-copy.page.html',
	styleUrls:
		[
			'./anime-detail-page-copy.page.scss'
		]
})
export class AnimeDetailPageCopyPage implements OnInit {
	showAddButton: boolean = true;
	currentAnime: Anime;
	currentDetailAnime: Anime;
	observable: Observable<any>;
	animeList: Array<Anime> = new Array<Anime>();
	id: number;

	constructor (private data: DataService, private api: ApiStuffService, private toastController: ToastController, private modal: ModalController) {}

	ngOnInit () {
		console.log('initialize');
		// Getting Details From Anime
		this.id = this.data.getId();
		this.getDetails();
		this.animeList = this.data.getAnimeList();
	}
	async getDetails () {
		const response = this.api.findAnimeDetails(this.id);
		this.currentAnime = JSON.parse((await response).data);
		this.updateButton();
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
	saveStudioId (id: number) {
		this.data.setCurrentStudio(id);
	}
}
