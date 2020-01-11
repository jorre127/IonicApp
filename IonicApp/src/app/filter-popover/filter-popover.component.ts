import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-filter-popover',
  templateUrl: './filter-popover.component.html',
  styleUrls: ['./filter-popover.component.scss'],
})
export class FilterPopoverComponent implements OnInit {
  subType : string;

  constructor( private nav:NavParams, private popover:PopoverController) { }

  ngOnInit() {
    this.subType = this.nav.get('type');


  }

  public onSelection() {
    this.popover.dismiss({ subType: this.subType });
  }

}
