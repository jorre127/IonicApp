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
}