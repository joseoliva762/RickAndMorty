import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-characther-card',
  templateUrl: './characther-card.component.html',
  styleUrls: ['./characther-card.component.scss']
})
export class CharactherCardComponent implements OnInit {
  @Input() character: any;
  @Input() selected: number | undefined;
  @Input() i: number | undefined;
  @Output() selectedEmitter: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    
  }
  showMoreData(index: number | undefined): void {
    this.selected = index as number; 
    this.selectedEmitter.emit(this.selected);
    console.log(this.selected);
  }

}
