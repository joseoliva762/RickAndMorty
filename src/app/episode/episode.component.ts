import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CharacterSelectorService } from './../core/service/character-selector.service';
import getData from './../utils/getData';
import { Episode } from '../core/Models/episodes/episodes.model';
import { Character } from '../core/Models/characters/characters.model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
    characterSelectorService: any;
    characters: any[] = [];
    data!: Episode;
    constructor( private route: ActivatedRoute, characterSelectorService: CharacterSelectorService) {
      this.characterSelectorService = characterSelectorService;
    }
    ngOnInit(): void {
      this.route.params.subscribe(async (params: Params) => {
        const type = params.type;
        const name = params.name;
        const ch: any[] = [];
        this.data = await this.characterSelectorService.getSpecificData(type, name);
        this.data.characters.forEach(async (element: any) => getData(element).then(data => ch.push(data)));
        this.characters = ch;
        console.log(this.characters);
      });
    }
}
