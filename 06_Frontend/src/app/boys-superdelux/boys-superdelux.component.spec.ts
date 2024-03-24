import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoysSuperdeluxComponent } from './boys-superdelux.component';

describe('BoysSuperdeluxComponent', () => {
  let component: BoysSuperdeluxComponent;
  let fixture: ComponentFixture<BoysSuperdeluxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoysSuperdeluxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoysSuperdeluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
