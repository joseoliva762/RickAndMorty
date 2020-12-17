import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CharacterSelectorService } from './../character-selector.service';
import getData from './../utils/getData';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characterSelectorService: any;
  episodes: any[] = [];
  data: any;

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

