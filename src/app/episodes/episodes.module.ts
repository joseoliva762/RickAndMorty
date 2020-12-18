import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EpisodesRoutingModule } from './episodes-routing.module';

import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeCardComponent } from './components/episode-card/episode-card.component';
import { SharedModule } from './../shared/shared.module';
// import { FinderbarComponent } from '../finderbar/finderbar.component';

@NgModule({
    declarations: [
        EpisodeCardComponent,
        EpisodesComponent,
        // FinderbarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        EpisodesRoutingModule,
        SharedModule
    ]
})
export class EpisodesModule {}
