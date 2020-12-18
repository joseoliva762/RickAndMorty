import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactherCardComponent } from './characther-card.component';

describe('CharactherCardComponent', () => {
  let component: CharactherCardComponent;
  let fixture: ComponentFixture<CharactherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactherCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
