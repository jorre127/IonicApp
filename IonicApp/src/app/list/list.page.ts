import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Anime } from '../app.component';
import { ModalController } from '@ionic/angular';
import { ListDetailPagePage } from '../list-detail-page/list-detail-page.page';
import { TapticEngine } from '@ionic-native/taptic-engine/ngx';
import { Storage } from '@ionic/storage';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

@Component({
	selector: 'app-list',
	templateUrl: 'list.page.html',
	styleUrls: [ 'list.page.scss' ]
})
export class ListPage implements OnInit {
	static animeList: Array<Anime> = new Array<Anime>();

	watchingList: Array<Anime> = new Array<Anime>();
	completedList: Array<Anime> = new Array<Anime>();
	onHoldList: Array<Anime> = new Array<Anime>();
	droppedList: Array<Anime> = new Array<Anime>();
	planToWatchList: Array<Anime> = new Array<Anime>();

	showWatchingList: boolean = true;
	showCompletedList: boolean = true;
	showOnHoldList: boolean = true;
	showDroppedList: boolean = true;
	showPlanToWatchList: boolean = true;

	arrowStatusWatching: string = 'arrow-down';
	arrowStatusCompletedList: string = 'arrow-down';
	arrowStatusOnHoldList: string = 'arrow-down';
	arrowStatusDroppedList: string = 'arrow-down';
	arrowStatusPlanToWatchList: string = 'arrow-down';

	listView: Array<boolean> = new Array<boolean>();
	listLength: number;
	showBadge: boolean;

	storageAnimeList: Array<Anime>;

	constructor (private data: DataService, private modal: ModalController, private vibration: TapticEngine, private storage: Storage) {}

	ngOnInit () {
		this.listView = this.data.getListView();
		this.getAnimeFromStorage();
		this.sortAnime();
	}

	async getAnimeFromStorage () {
		this.storageAnimeList = await this.storage.get('animeList');
		ListPage.animeList = this.storageAnimeList;
		this.sortAnime();
	}

	async openDetailPage (anime: Anime) {
		this.vibration.impact({
			style: 'heavy' // light | medium | heavy
		});
		const modall = await this.modal.create({
			component: ListDetailPagePage,
			showBackdrop: true,
			cssClass: 'modal',
			componentProps:
				{
					animeList: ListPage.animeList,
					anime: anime,
					list: this
				}
		});
		modall.present();
	}

	showWatching () {
		if (this.showWatchingList == false) {
			this.showWatchingList = true;
			this.arrowStatusWatching = 'arrow-down';
		}
		else {
			this.showWatchingList = false;
			this.arrowStatusWatching = 'arrow-forward';
		}
	}
	showCompleted () {
		if (this.showCompletedList == false) {
			this.showCompletedList = true;
			this.arrowStatusCompletedList = 'arrow-down';
		}
		else {
			this.showCompletedList = false;
			this.arrowStatusCompletedList = 'arrow-forward';
		}
	}
	showOnHold () {
		if (this.showOnHoldList == false) {
			this.showOnHoldList = true;
			this.arrowStatusOnHoldList = 'arrow-down';
		}
		else {
			this.showOnHoldList = false;
			this.arrowStatusOnHoldList = 'arrow-forward';
		}
	}
	showDropped () {
		if (this.showDroppedList == false) {
			this.showDroppedList = true;
			this.arrowStatusDroppedList = 'arrow-down';
		}
		else {
			this.showDroppedList = false;
			this.arrowStatusDroppedList = 'arrow-forward';
		}
	}
	showPlanToWatch () {
		if (this.showPlanToWatchList == false) {
			this.showPlanToWatchList = true;
			this.arrowStatusPlanToWatchList = 'arrow-down';
		}
		else {
			this.showPlanToWatchList = false;
			this.arrowStatusPlanToWatchList = 'arrow-forward';
		}
	}

	public sortAnime () {
		this.watchingList = [];
		this.completedList = [];
		this.onHoldList = [];
		this.droppedList = [];
		this.planToWatchList = [];

		ListPage.animeList.forEach((anime) => {
			if (anime.watchStatus == 'Watching') {
				this.watchingList.push(anime);
			}
		});
		ListPage.animeList.forEach((anime) => {
			if (anime.watchStatus == 'Completed') {
				this.completedList.push(anime);
			}
		});
		ListPage.animeList.forEach((anime) => {
			if (anime.watchStatus == 'On-Hold') {
				this.onHoldList.push(anime);
			}
		});
		ListPage.animeList.forEach((anime) => {
			if (anime.watchStatus == 'Dropped') {
				this.droppedList.push(anime);
			}
		});
		ListPage.animeList.forEach((anime) => {
			if (anime.watchStatus == 'Plan To Watch') {
				this.planToWatchList.push(anime);
			}
		});
		this.listLength = ListPage.animeList.length;
	}

	// add back when alpha.4 is out
	// navigate(item) {
	//   this.router.navigate(['/list', JSON.stringify(item)]);
	// }
}
