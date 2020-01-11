import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	darkMode: boolean;
	listView: Array<boolean> = [ true, false, false ];
	listViewStandard: string;

	constructor () {}
	setDarkMode (bool: boolean) {
		this.darkMode = bool;
	}
	getDarkMode () {
		return this.darkMode;
	}
	setListView (gridview: boolean, detailedListView: boolean, listView: boolean) {
		this.listView[0] = gridview;
		this.listView[1] = detailedListView;
		this.listView[2] = listView;
	}
	getListView (): Array<boolean> {
		return this.listView;
	}
	setListViewStandard (standard: string) {
		this.listViewStandard = standard;
	}
	getListViewStandard (): string {
		return this.listViewStandard;
	}
}
