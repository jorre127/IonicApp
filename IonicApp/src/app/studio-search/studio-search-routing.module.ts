import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudioSearchPage } from './studio-search.page';

const routes: Routes = [
  {
    path: '',
    component: StudioSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudioSearchPageRoutingModule {}
