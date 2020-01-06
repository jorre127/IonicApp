import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenreSearchPage } from './genre-search.page';

const routes: Routes = [
  {
    path: '',
    component: GenreSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenreSearchPageRoutingModule {}
