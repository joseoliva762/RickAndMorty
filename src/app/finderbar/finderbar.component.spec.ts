import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderbarComponent } from './finderbar.component';

describe('FinderbarComponent', () => {
  let component: FinderbarComponent;
  let fixture: ComponentFixture<FinderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinderbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
