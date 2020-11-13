import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-finderbar',
  templateUrl: './finderbar.component.html',
  styleUrls: ['./finderbar.component.scss']
})
export class FinderbarComponent implements OnInit, OnChanges {
  @Output()
  searching: EventEmitter<string> = new EventEmitter<string>();
  name = '';
  ngOnInit(): void {
    this.name = '';
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.writing();
  }
  writing(): void {
    this.searching.emit(this.name);
  }
}
