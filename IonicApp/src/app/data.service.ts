import { Injectable } from '@angular/core';
import { Anime } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  id : number;
  darkMode : boolean;
  animeList:Array<Anime> = new Array<Anime>();
  currentAnime:Anime = new Anime();

  listView:Array<boolean> = [true,false,false];
  listViewStandard:string;

  constructor() { }

  setId(id:number){
    this.id = id;
  }
  getId(){
    return this.id;
  }
  setDarkMode(bool:boolean){
    this.darkMode = bool;
  }
  getDarkMode(){
    return this.darkMode;
  }
  addAnimeToList(anime:Anime){
    this.animeList.push(anime);
  }
  getAnimeList(): Array<Anime>{
    return this.animeList;
  }
  setCurrentAnime(anime:Anime){
    this.currentAnime = anime;
  }
  getCurrentAnime():Anime{
    return this.currentAnime;
  }
  setListView(gridview:boolean,detailedListView:boolean,listView:boolean){
    this.listView[0] = gridview;
    this.listView[1] = detailedListView;
    this.listView[2] = listView;
  }
  getListView(): Array<boolean>{
    return this.listView;
  }
  setListViewStandard(standard:string){
    this.listViewStandard = standard;
  }
  getListViewStandard():string{
    return this.listViewStandard;
  }
}
