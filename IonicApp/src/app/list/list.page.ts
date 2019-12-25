import { Component, OnInit} from '@angular/core';
import {DataService} from '../data.service'
import {Anime} from '../app.component'
import {ModalController} from "@ionic/angular"
import {ListDetailPagePage} from "../list-detail-page/list-detail-page.page"

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  animeList:Array<Anime> = new Array<Anime>();
  listView:Array<boolean> = new Array<boolean>();
  showBadge:boolean;

  constructor( private data:DataService, private modal:ModalController) {}

  ngOnInit() {
    this.animeList = this.data.getAnimeList();
    this.listView = this.data.getListView();
  }
  saveId(id:number){
    this.data.setId(id);
  }
  async openDetailPage(anime:Anime){
   const modall = await this.modal.create({
        component:ListDetailPagePage,
        showBackdrop:true,
        cssClass: "modal",
        componentProps: {
            'anime':anime ,
          },
    });
    modall.present();
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
