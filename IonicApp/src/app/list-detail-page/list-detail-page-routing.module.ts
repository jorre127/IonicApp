import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDetailPagePage } from './list-detail-page.page';

const routes: Routes = [
  {
    path: '',
    component: ListDetailPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDetailPagePageRoutingModule {}
