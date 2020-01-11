import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiStuffService } from '../api-stuff.service';
import { Anime } from '../app.component';
import { Observable } from 'rxjs';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-season-search',
  templateUrl: './season-search.page.html',
  styleUrls: ['./season-search.page.scss'],
})
export class SeasonSearchPage implements OnInit {

  premiered: string;
  year: number;
  season : string;
  observable: Observable<any>;
  seasonAnimeList: Array<Anime>;

  constructor(private route :ActivatedRoute, private api:ApiStuffService) { }

  ngOnInit() {
    this.premiered = this.route.snapshot.paramMap.get('premiered');
    this.year = parseInt(this.premiered.match(/[0-9]+/g)[0]);
    this.season = this.premiered.match(/[a-zA-Z]+/g)[0].toLocaleLowerCase();

    this.observable = this.api.findSpecificSeasonalAnime(this.year,this.season);
    this.observable.subscribe(result =>{
      this.seasonAnimeList = result.anime;
    })
  }

}
