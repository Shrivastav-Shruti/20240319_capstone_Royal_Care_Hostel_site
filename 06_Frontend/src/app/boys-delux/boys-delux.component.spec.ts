import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoysDeluxComponent } from './boys-delux.component';

describe('BoysDeluxComponent', () => {
  let component: BoysDeluxComponent;
  let fixture: ComponentFixture<BoysDeluxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoysDeluxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoysDeluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
