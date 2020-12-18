import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { from } from 'rxjs';


import { EpisodeComponent } from './episode/episode.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CharacterComponent } from './character/character.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/characters',
        pathMatch: 'full',
      },
      {
        path: 'characters',
        // component: CharactersComponent
        loadChildren: () => import('./characters/characters.module').then(module => module.CharactersModule)
      },
      {
        path: 'episodes',
        loadChildren: () => import('./episodes/episodes.module').then(module => module.EpisodesModule)
      },
      {
        path: 'characters/:type/:name',
        component: CharacterComponent
      },
      {
        path: 'episodes/:type/:name',
        component: EpisodeComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
