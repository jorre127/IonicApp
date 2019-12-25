import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {ApiStuffService} from "../api-stuff.service"
import { Observable, empty } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Anime } from '../app.component';

@Component({
  selector: 'app-anime-detail-page',
  templateUrl: './anime-detail-page.page.html',
  styleUrls: ['./anime-detail-page.page.scss'],
})
export class AnimeDetailPagePage implements OnInit {

  showAddButton:boolean = true;
  currentAnime: Anime = new Anime();
  observable: Observable<any>;
  animeList: Array<Anime> = new Array<Anime>();
  id:number;

  constructor(private data:DataService, private api : ApiStuffService, private toastController:ToastController) { }
  
  ngOnInit() {
    // Getting Details From Anime
    this.id = this.data.getId();
    this.observable = this.api.findAnimeDetails(this.id);
    this.observable.subscribe(result =>{
    this.currentAnime = result;
    this.updateButton();
    })

    this.animeList = this.data.getAnimeList();
  }
  addAnimeToList(){
    this.data.addAnimeToList(this.currentAnime)
    this.updateButton();
    this.presentToast(this.currentAnime.title+" added to your list")
  }
  
  async updateButton(){
    if(this.animeList.length>0){
     this.animeList.forEach(anime=>{
        if(anime.mal_id == this.currentAnime.mal_id){
         this.showAddButton = false;
       }
      })
   }
   else{
    this.showAddButton = true;
    }
  }
  async presentToast(message : string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
