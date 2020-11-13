import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import getData from '../utils/getData';


@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnChanges {
    @Input() page = 1;
    name: string | undefined;
    status = false;
    selected: number | undefined;
    charactersURL: string | undefined;
    characters: any;
    numberOfPages: Array<number | string> = ['Paginas'];


    ngOnInit(): void {
        this.generateCharacters();
        this.getNumberOfPages();
    }
    ngOnChanges(changes: SimpleChanges): void{
        console.log(changes);
        this.generateCharacters();
        this.getNumberOfPages();
    }

    generateCharacters(): void {
        this.charactersURL = this.name
        ? `https://rickandmortyapi.com/api/character?name=${this.name}&page=${this.page}`
        : `https://rickandmortyapi.com/api/character?page=${this.page}`;
        getData(this.charactersURL).then(data => this.characters = data);
        this.getNumberOfPages();
    }
    showMoreData(index: number): void {
        this.status = !this.status;
        this.selected = index;
    }
    getNumberOfPages(): void {
        this.numberOfPages = Array(this.characters.info.pages).fill(1).map((x, i) => i + 1);
        console.log(this.numberOfPages);
    }
    changeApiURLByPage(page: number | string): void{
        this.page = page as number;
        this.generateCharacters();
    }
    searchingName(): void {
        this.generateCharacters();
        this.getNumberOfPages();
    }
}
