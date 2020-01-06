import { Component, OnInit } from '@angular/core';
import { Anime } from '../app.component';
import { Observable } from 'rxjs';
import { ApiStuffService } from '../api-stuff.service';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre-search',
  templateUrl: './genre-search.page.html',
  styleUrls: ['./genre-search.page.scss'],
})
export class GenreSearchPage implements OnInit {


  genreAnimeList: Array<Anime>;
	genreId: number;
	observableGenre: Observable<any>;

  constructor(private api: ApiStuffService, private data:DataService, private route:ActivatedRoute) { }

	ngOnInit() {
		this.genreId = parseInt(this.route.snapshot.paramMap.get("id"));
		this.observableGenre = this.api.findGenre(this.genreId);
		this.observableGenre.subscribe((result) => {
			this.genreAnimeList = result.anime;
		});
	}

}
