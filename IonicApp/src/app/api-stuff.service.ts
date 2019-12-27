import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiStuffService {
  
response:any;

  constructor(private http: HttpClient) {}

  findAnimeDetails(id:number) : Observable<any>{
    return this.http.get("https://api.jikan.moe/v3//anime/"+id+"/");
  }

  searchAnime(title :string): Observable<any>{
    return this.http.get("https://api.jikan.moe/v3/search/anime?q="+title+"&page=1");
  }

  findSeasonalAnime(): Observable<any>{
    return this.http.get("https://api.jikan.moe/v3/season")
  }
  findUpcomingAnime(): Observable<any>{
    return this.http.get("https://api.jikan.moe/v3/season/later")
  }
  findSchedule(): Observable<any>{
    return this.http.get("https://api.jikan.moe/v3/schedule")
  }
  findStudio(id:number){
    return this.http.get("https://api.jikan.moe/v3/producer/"+id)
  }
}