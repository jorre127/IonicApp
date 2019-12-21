import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimeDetailPagePage } from './anime-detail-page.page';

const routes: Routes = [
  {
    path: '',
    component: AnimeDetailPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeDetailPagePageRoutingModule {}
