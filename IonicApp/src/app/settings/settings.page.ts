import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service"
import { TapticEngine } from '@ionic-native/taptic-engine/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  toggled: boolean;
  darkMode :boolean;
  constructor(private data :DataService, private vibration : TapticEngine) { 
    this.darkMode = data.getDarkMode();
    this.toggled = this.darkMode;
  }
  ngOnInit() {
  }
  toggleDarkmode(){
    document.body.classList.toggle("dark",this.toggled)
    this.data.setDarkMode(this.toggled)
    this.vibration.impact({
      style: "medium" // light | medium | heavy
    });
  }

}
