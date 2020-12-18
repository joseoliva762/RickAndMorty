import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterSelectorService } from './service/character-selector.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CharacterSelectorService
  ]
})
export class CoreModule { }
