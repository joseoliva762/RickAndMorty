import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import getData from '../../../utils/getData';
import { Characters, Character } from '../../../core/Models/characters/characters.model';


@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnChanges {
    @Input() page = 1;
    name!: string;
    status = false;
    selected!: number | undefined;
    charactersURL!: string;
    characters!: Characters;
    numberOfPages: Array<number | string> = ['Paginas'];
    constructor() {}

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
        this.numberOfPages = Array((this.characters as Characters).info.pages).fill(1).map((x, i) => i + 1);
        console.log(this.numberOfPages);
    }
    changeApiURLByPage(page: number | string): void{
        this.selected = undefined;
        this.page = page as number;
        this.generateCharacters();
    }
    searchingName(): void {
        this.generateCharacters();
        this.getNumberOfPages();
    }
}
