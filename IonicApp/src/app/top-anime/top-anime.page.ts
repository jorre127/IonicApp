import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { FilterPopoverComponent } from '../filter-popover/filter-popover.component';
import { Observable } from 'rxjs';
import { ApiStuffService } from '../api-stuff.service';
import { Anime } from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-top-anime',
	templateUrl: './top-anime.page.html',
	styleUrls: [ './top-anime.page.scss' ]
})
export class TopAnimePage implements OnInit {
	type: string;
	page: number;
  subType: string;
  topAnimeList: Array<Anime>;

	observable: Observable<any>;

	constructor (private popoverController: PopoverController, private api:ApiStuffService,private route: ActivatedRoute) {}

	ngOnInit () {
    this.subType = this.route.snapshot.paramMap.get("type").toLocaleLowerCase();
    this.getAnime();
  }

	async presentPopover (ev: any) {
		const popover = await this.popoverController.create({
			component: FilterPopoverComponent,
			event: ev,
			translucent: false,
			componentProps:
				{
          type: this.subType,
				}
		});
		await popover.present();

		return popover.onDidDismiss().then((returnData: any) => {
			if (returnData.data) {
        this.subType = returnData.data.subType;
        this;this.getAnime();
			}
		});
  }
  
  public async getAnime(){
    this.observable = this.api.findTopAnime("anime",1,this.subType);
    this;this.observable.subscribe(result=>{
      this.topAnimeList = result.top;
    })
  }
}
