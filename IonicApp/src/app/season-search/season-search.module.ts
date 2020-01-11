import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeasonSearchPageRoutingModule } from './season-search-routing.module';

import { SeasonSearchPage } from './season-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeasonSearchPageRoutingModule
  ],
  declarations: [SeasonSearchPage]
})
export class SeasonSearchPageModule {}
