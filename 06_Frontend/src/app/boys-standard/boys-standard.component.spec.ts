import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoysStandardComponent } from './boys-standard.component';

describe('BoysStandardComponent', () => {
  let component: BoysStandardComponent;
  let fixture: ComponentFixture<BoysStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoysStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoysStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
