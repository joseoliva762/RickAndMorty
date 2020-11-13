import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import getData from '../utils/getData';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

    @Input() page = 1;
    name: string | undefined;
    status = false;
    selected: number | undefined;
    episodeURL: string | undefined;
    episodes: any;
    numberOfPages: Array<number | string> = ['Paginas'];

    ngOnInit(): void {
        this.generateEpisodes();
        this.getNumberOfPages();
    }
    ngOnChanges(changes: SimpleChanges): void{
        console.log(changes);
        this.generateEpisodes();
        this.getNumberOfPages();
    }

    generateEpisodes(): void {
        this.episodeURL = this.name
        ? `https://rickandmortyapi.com/api/episode/?name=${this.name}&page=${this.page}`
        : `https://rickandmortyapi.com/api/episode/?page=${this.page}`;
        getData(this.episodeURL).then(data => this.episodes = data);
        this.getNumberOfPages();
    }
    showMoreData(index: number): void {
        this.status = !this.status;
        this.selected = index;
    }
    getNumberOfPages(): void {
        this.numberOfPages = Array(this.episodes.info.pages).fill(1).map((x, i) => i + 1);
        console.log(this.numberOfPages);
    }
    changeApiURLByPage(page: number | string): void{
        this.page = page as number;
        this.generateEpisodes();
    }
    searchingName(): void {
        this.generateEpisodes();
        this.getNumberOfPages();
    }
}
