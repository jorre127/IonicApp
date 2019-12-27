import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimeDetailPageCopyPage } from './anime-detail-page-copy.page';

const routes: Routes = [
  {
    path: '',
    component: AnimeDetailPageCopyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeDetailPageCopyPageRoutingModule {}
