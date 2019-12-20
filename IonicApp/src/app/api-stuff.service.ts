import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiStuffService {

  constructor(private http: HttpClient) { }

  findAnime(){
    console.log("Got The Stuff");
    return this.http.get("https://api.jikan.moe/v3/anime/1/");
  }
}