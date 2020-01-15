import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs';
import { map, tap, retryWhen, delayWhen, delay } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class ApiStuffService {
	response: any;

	constructor (private http: HttpClient, private HTTP: HTTP) {}

	/*
	async findAnimeDetails (id: number) {
		const response = await this.HTTP.get('https://api.jikan.moe/v3//anime/' + id + '/', null, null);
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
	findSpecificSeasonalAnime (year: number, season: string) {
		return this.http.get('https://api.jikan.moe/v3/season/' + year + '/' + season);
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
	findGenre (id: number) {
		return this.http.get('https://api.jikan.moe/v3/genre/anime/' + id);
	}
	findTopAnime (type: string, page: number, subtype: string) {
		return this.http.get('https://api.jikan.moe/v3/top/' + type + '/' + page + '/' + subtype);
	}
	findAnimeEpisodes(id:number,page:number = 1){
		return this.http.get('https://api.jikan.moe/v3/anime/'+id+'/episodes/'+page);
	}
	syncMal(page:number){
		return this.http.get('https://api.jikan.moe/v3/user/jorre127/animelist/all/'+page).pipe(retryWhen(errors => errors.pipe(delay(1000))))
	}
}

class malRequest{
	"request_hash": "request:user:245fd42b15ef26ac95bcbdcc2ece3b99e0594332";
	"request_cached": false;
	"request_cache_expiry": 300;
	"anime": [];
}
