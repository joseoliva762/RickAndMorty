import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {
  @Input() episode: any;
  @Input() selected: number | undefined;
  @Input() i: number | undefined;
  @Output() selectedEmitter: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {}
  showMoreData(index: number | undefined): void {
    this.selected = index as number;
    this.selectedEmitter.emit(this.selected);
    console.log(this.selected);
  }

}
