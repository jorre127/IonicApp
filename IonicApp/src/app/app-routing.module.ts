import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'anime-detail-page',
    loadChildren: () => import('./anime-detail-page/anime-detail-page.module').then( m => m.AnimeDetailPagePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'list-detail-page',
    loadChildren: () => import('./list-detail-page/list-detail-page.module').then( m => m.ListDetailPagePageModule)
  },
  {
    path: 'studio-search',
    loadChildren: () => import('./studio-search/studio-search.module').then( m => m.StudioSearchPageModule)
  },
  {
    path: 'anime-detail-page-copy',
    loadChildren: () => import('./anime-detail-page-copy/anime-detail-page-copy.module').then( m => m.AnimeDetailPageCopyPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
