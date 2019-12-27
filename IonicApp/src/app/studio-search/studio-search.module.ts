import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudioSearchPageRoutingModule } from './studio-search-routing.module';

import { StudioSearchPage } from './studio-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudioSearchPageRoutingModule
  ],
  declarations: [StudioSearchPage]
})
export class StudioSearchPageModule {}
