import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import { CharactersComponent } from './components/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodeComponent } from './episode/episode.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CharacterComponent } from './character/character.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'episodes',
    component: EpisodesComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
