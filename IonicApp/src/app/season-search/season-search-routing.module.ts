import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasonSearchPage } from './season-search.page';

const routes: Routes = [
  {
    path: '',
    component: SeasonSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeasonSearchPageRoutingModule {}
