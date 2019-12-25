import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDetailPagePageRoutingModule } from './list-detail-page-routing.module';

import { ListDetailPagePage } from './list-detail-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDetailPagePageRoutingModule
  ],
  declarations: [ListDetailPagePage]
})
export class ListDetailPagePageModule {}
