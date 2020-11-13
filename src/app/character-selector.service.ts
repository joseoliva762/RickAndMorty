import { Injectable } from '@angular/core';

import getData from './utils/getData';

@Injectable({
  providedIn: 'root'
})
export class CharacterSelectorService {
  API = ' https://rickandmortyapi.com/api/';
  data: any;
  constructor() { }

  getAllData(type: string): void {
    getData(this.API + type).then(data => this.data = data);
  }
  async getSpecificData(type: string, name: string): Promise<any> {
    this.data = await getData(`${this.API}${type}/${name}`);
    return this.data;
  }
}
