import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Anime, MalAnime } from '../app.component';
import { ModalController } from '@ionic/angular';
import { ListDetailPagePage } from '../list-detail-page/list-detail-page.page';
import { TapticEngine } from '@ionic-native/taptic-engine/ngx';
import { Storage } from '@ionic/storage';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { Observable } from 'rxjs';
import { ApiStuffService } from '../api-stuff.service';

@Component({
	selector: 'app-list',
	templateUrl: 'list.page.html',
	styleUrls: [ 'list.page.scss' ]
})
export class ListPage implements OnInit {
	static animeList: Array<MalAnime> = new Array<MalAnime>();

	watchingList: Array<MalAnime> = new Array<MalAnime>();
	completedList: Array<MalAnime> = new Array<MalAnime>();
	onHoldList: Array<MalAnime> = new Array<MalAnime>();
	droppedList: Array<MalAnime> = new Array<MalAnime>();
	planToWatchList: Array<MalAnime> = new Array<MalAnime>();

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

	storageAnimeList: Array<MalAnime>;

	malObservable: Observable<any>;
	tempAnimeList: Array<MalAnime> = new Array<MalAnime>();

	constructor (private data: DataService, private modal: ModalController, private vibration: TapticEngine, private storage: Storage, private api: ApiStuffService) {}

	ngOnInit () {
		this.listView = this.data.getListView();
		this.setup();
	}
	async setup (event = null) {
		this.tempAnimeList = [];
		this.showList();
		await this.syncMal();
		setTimeout(() => {
			this.getAnimeFromStorage();
			this.sortAnime();
			event.target.complete();
		}, 2000);
	}
	async syncMal () {
		let dis = this;
		return new Promise(async function (resolve, reject) {
			for (let i = 1; i < 5; i++) {
				dis.malObservable = await dis.api.syncMal(i);
				await dis.malObservable.subscribe((result) => {
					result.anime.forEach((element) => {
						dis.tempAnimeList.push(element);
					});
					console.log(dis.tempAnimeList);
					dis.storage.set('animeList', dis.tempAnimeList);
					resolve();
				});
			}
		});
	}
	async getAnimeFromStorage () {
		this.storageAnimeList = await this.storage.get('animeList');
		ListPage.animeList = this.storageAnimeList;
		this.sortAnime();
	}

	async openDetailPage (anime: MalAnime) {
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
	async showList () {
		this.showWatchingList = await this.storage.get('showWatchingList');
		this.showCompletedList = await this.storage.get('showCompletedList');
		this.showOnHoldList = await this.storage.get('showOnHoldList');
		this.showDroppedList = await this.storage.get('showDroppedList');
		this.showPlanToWatchList = await this.storage.get('showPlanToWatchList');

		this.arrowStatusWatching = await this.storage.get('arrowStatusWatching');
		this.arrowStatusCompletedList = await this.storage.get('arrowStatusCompletedList');
		this.arrowStatusOnHoldList = await this.storage.get('arrowStatusOnHoldList');
		this.arrowStatusDroppedList = await this.storage.get('arrowStatusDroppedList');
		this.arrowStatusPlanToWatchList = await this.storage.get('arrowStatusPlanToWatchList');
	}

	showWatching () {
		if (this.showWatchingList == false) {
			this.showWatchingList = true;
			this.storage.set('showWatchingList', this.showWatchingList);
			this.arrowStatusWatching = 'arrow-down';
			this.storage.set('arrowStatusWatching', 'arrow-down');
		}
		else {
			this.showWatchingList = false;
			this.storage.set('showWatchingList', this.showWatchingList);
			this.arrowStatusWatching = 'arrow-forward';
			this.storage.set('arrowStatusWatching', 'arrow-forward');
		}
	}
	showCompleted () {
		if (this.showCompletedList == false) {
			this.showCompletedList = true;
			this.storage.set('showCompletedList', this.showCompletedList);
			this.arrowStatusCompletedList = 'arrow-down';
			this.storage.set('arrowStatusCompletedList', 'arrow-down');
		}
		else {
			this.showCompletedList = false;
			this.storage.set('showCompletedList', this.showCompletedList);
			this.arrowStatusCompletedList = 'arrow-forward';
			this.storage.set('arrowStatusCompletedList', 'arrow-forward');
		}
	}
	showOnHold () {
		if (this.showOnHoldList == false) {
			this.showOnHoldList = true;
			this.storage.set('showOnHoldList', this.showOnHoldList);
			this.arrowStatusOnHoldList = 'arrow-down';
			this.storage.set('arrowStatusOnHoldList', 'arrow-down');
		}
		else {
			this.showOnHoldList = false;
			this.storage.set('showOnHoldList', this.showOnHoldList);
			this.arrowStatusOnHoldList = 'arrow-forward';
			this.storage.set('arrowStatusOnHoldList', 'arrow-forward');
		}
	}
	showDropped () {
		if (this.showDroppedList == false) {
			this.showDroppedList = true;
			this.storage.set('showDroppedList', this.showDroppedList);
			this.arrowStatusDroppedList = 'arrow-down';
			this.storage.set('arrowStatusDroppedList', 'arrow-down');
		}
		else {
			this.showDroppedList = false;
			this.storage.set('showDroppedList', this.showDroppedList);
			this.arrowStatusDroppedList = 'arrow-forward';
			this.storage.set('arrowStatusDroppedList', 'arrow-forward');
		}
	}
	showPlanToWatch () {
		if (this.showPlanToWatchList == false) {
			this.showPlanToWatchList = true;
			this.storage.set('showPlanToWatchList', this.showPlanToWatchList);
			this.arrowStatusPlanToWatchList = 'arrow-down';
			this.storage.set('arrowStatusPlanToWatchList', 'arrow-down');
		}
		else {
			this.showPlanToWatchList = false;
			this.storage.set('showPlanToWatchList', this.showPlanToWatchList);
			this.arrowStatusPlanToWatchList = 'arrow-forward';
			this.storage.set('arrowStatusPlanToWatchList', 'arrow-forward');
		}
	}

	public sortAnime () {
		this.watchingList = [];
		this.completedList = [];
		this.onHoldList = [];
		this.droppedList = [];
		this.planToWatchList = [];

		ListPage.animeList.forEach((anime) => {
			if (anime.watching_status == 1) {
				this.watchingList.push(anime);
			}
		});
		ListPage.animeList.forEach((anime) => {
			if (anime.watching_status == 2) {
				this.completedList.push(anime);
			}
		});
		ListPage.animeList.forEach((anime) => {
			if (anime.watching_status == 3) {
				this.onHoldList.push(anime);
			}
		});
		ListPage.animeList.forEach((anime) => {
			if (anime.watching_status == 4) {
				this.droppedList.push(anime);
			}
		});
		ListPage.animeList.forEach((anime) => {
			if (anime.watching_status == 6) {
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
