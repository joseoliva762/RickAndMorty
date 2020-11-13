import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import getData from '../utils/getData';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnChanges {
  URL = `https://rickandmortyapi.com/api`;
  data: any;
  characters: any;
  locations: any;
  episodes: any;

  ngOnInit(): void {
    this.generateData();
  }
  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
    this.generateData();
}
  generateData(): void {
    getData(this.URL + '/character').then((data) => this.characters = data.info.count);
    getData(this.URL + '/location').then((data) => this.locations = data.info.count);
    getData(this.URL + '/episode').then((data) => this.episodes = data.info.count);
  }
}
