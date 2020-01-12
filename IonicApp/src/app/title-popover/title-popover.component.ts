import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-title-popover',
  templateUrl: './title-popover.component.html',
  styleUrls: ['./title-popover.component.scss'],
})
export class TitlePopoverComponent implements OnInit {
  title :number;


  constructor(private nav:NavParams) { }

  ngOnInit() {
    this.title = this.nav.get('title');
  }

}
