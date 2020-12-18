import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FinderbarComponent } from './components/finderbar/finderbar.component';


@NgModule({
  declarations: [
    FinderbarComponent
  ],
  exports: [
    FinderbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
