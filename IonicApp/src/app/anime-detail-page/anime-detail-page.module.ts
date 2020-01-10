import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimeDetailPagePageRoutingModule } from './anime-detail-page-routing.module';

import { AnimeDetailPagePage } from './anime-detail-page.page';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimeDetailPagePageRoutingModule,
    VirtualScrollerModule
  ],
  declarations: [AnimeDetailPagePage]
})
export class AnimeDetailPagePageModule {}
