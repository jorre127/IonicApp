import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimeDetailPageCopyPageRoutingModule } from './anime-detail-page-copy-routing.module';

import { AnimeDetailPageCopyPage } from './anime-detail-page-copy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimeDetailPageCopyPageRoutingModule
  ],
  declarations: [AnimeDetailPageCopyPage]
})
export class AnimeDetailPageCopyPageModule {}
