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
    path: 'anime-detail-page/:id',
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
    path: 'studio-search/:id',
    loadChildren: () => import('./studio-search/studio-search.module').then( m => m.StudioSearchPageModule)
  },
  {
    path: 'genre-search/:id',
    loadChildren: () => import('./genre-search/genre-search.module').then( m => m.GenreSearchPageModule)
  },
  {
    path: 'season-search/:premiered',
    loadChildren: () => import('./season-search/season-search.module').then( m => m.SeasonSearchPageModule)
  },
  {
    path: 'top-anime/:type',
    loadChildren: () => import('./top-anime/top-anime.module').then( m => m.TopAnimePageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./statistics/statistics.module').then( m => m.StatisticsPageModule)
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
