import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CharacterSelectorService } from './../core/service/character-selector.service';
import getData from './../utils/getData';
import { Character } from '../core/Models/characters/characters.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characterSelectorService: CharacterSelectorService;
  episodes: any[] = [];
  data!: Character;

  constructor( private route: ActivatedRoute, characterSelectorService: CharacterSelectorService) {
    this.characterSelectorService = characterSelectorService;
  }

  ngOnInit(): void {
    this.route.params.subscribe(async (params: Params) => {
      const type = params.type;
      const name = params.name;
      const ep: any[] = [];
      this.data = await this.characterSelectorService.getSpecificData(type, name);
      this.data.episode.forEach(async (element: any) => getData(element).then(data => ep.push(data)));
      this.episodes = ep;
      console.log(this.episodes);
    });
  }
}

