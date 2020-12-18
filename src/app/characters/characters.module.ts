import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharactherCardComponent } from './components/characther-card/characther-card.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SharedModule } from '../shared/shared.module';
// import { FinderbarComponent } from '../finderbar/finderbar.component';

import { CharactersRoutingModule } from './characters-routing.module';

@NgModule({
    declarations: [
        CharactherCardComponent,
        CharactersComponent,
        // FinderbarComponent
    ],
    imports: [
        CommonModule,
        CharactersRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class CharactersModule { }
