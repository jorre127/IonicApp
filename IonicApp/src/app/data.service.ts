import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  id : number;
  darkMode : boolean;

  constructor() { }

  setId(id:number){
    this.id = id;
  }
  getId(){
    return this.id;
  }
  setDarkMode(bool:boolean){
    this.darkMode = bool;
  }
  getDarkMode(){
    return this.darkMode;
  }
}
