import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TapticEngine } from '@ionic-native/taptic-engine/ngx';
import { AnimeDetailPagePage } from '../anime-detail-page/anime-detail-page.page';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: [ './settings.page.scss' ]
})
export class SettingsPage implements OnInit {
	toggled: boolean;
	darkMode: boolean;
	listMode: string;

	gridView: boolean;
	detailedListView: boolean;
	listView: boolean;
	constructor(private data: DataService, private vibration: TapticEngine) {}
	ngOnInit() {
		this.darkMode = this.data.getDarkMode();
		this.toggled = this.darkMode;
		this.listMode = this.data.getListViewStandard();
	}
	toggleDarkmode() {
		document.body.classList.toggle('dark', this.toggled);
		this.data.setDarkMode(this.toggled);
		this.vibration.impact({
			style: 'medium' // light | medium | heavy
		});
	}
	listModeChanged() {
		this.vibration.impact({
			style: 'medium' // light | medium | heavy
		});
		this.gridView = false;
		this.detailedListView = false;
		this.listView = false;
		switch (this.listMode) {
			case 'gridView':
				this.gridView = true;
				this.data.setListViewStandard('gridView');
				break;
			case 'detailedListView':
				this.detailedListView = true;
				this.data.setListViewStandard('detailedListView');
				break;
			case 'listView':
				this.listView = true;
				this.data.setListViewStandard('listView');
				break;
		}
		this.data.setListView(this.gridView, this.detailedListView, this.listView);
	}
}
