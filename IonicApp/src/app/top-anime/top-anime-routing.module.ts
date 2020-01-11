import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopAnimePage } from './top-anime.page';

const routes: Routes = [
  {
    path: '',
    component: TopAnimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopAnimePageRoutingModule {}
