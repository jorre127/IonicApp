import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  toggled: boolean;
  constructor() { }

  ngOnInit() {
  }
  toggleDarkmode(){
    document.body.classList.toggle("dark",this.toggled)
  }

}
