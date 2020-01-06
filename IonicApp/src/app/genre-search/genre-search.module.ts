import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenreSearchPageRoutingModule } from './genre-search-routing.module';

import { GenreSearchPage } from './genre-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenreSearchPageRoutingModule
  ],
  declarations: [GenreSearchPage]
})
export class GenreSearchPageModule {}
