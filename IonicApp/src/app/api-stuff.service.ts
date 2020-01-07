import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
	providedIn: 'root'
})
export class ApiStuffService {
	response: any;

	constructor (private http: HttpClient, private HTTP: HTTP) {}

  /* for phone
  async findAnimeDetails(id:number){
    const response = await this.HTTP.get("https://api.jikan.moe/v3//anime/"+id+"/",null,null);
    return response;
  }
  */

	public findAnimeDetails (id: number): Observable<any> {
		return this.http.get('https://api.jikan.moe/v3//anime/' + id + '/');
  }

	searchAnime (title: string): Observable<any> {
		return this.http.get('https://api.jikan.moe/v3/search/anime?q=' + title + '&page=1');
	}

	findSeasonalAnime (): Observable<any> {
		return this.http.get('https://api.jikan.moe/v3/season');
	}
	findUpcomingAnime (): Observable<any> {
		return this.http.get('https://api.jikan.moe/v3/season/later');
	}
	findSchedule (): Observable<any> {
		return this.http.get('https://api.jikan.moe/v3/schedule');
	}
	findStudio (id: number) {
		return this.http.get('https://api.jikan.moe/v3/producer/' + id);
  }
  findGenre(id:number){
    return this.http.get('https://api.jikan.moe/v3/genre/anime/'+id)
  }
}
