import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsStandardComponent } from './girls-standard.component';

describe('GirlsStandardComponent', () => {
  let component: GirlsStandardComponent;
  let fixture: ComponentFixture<GirlsStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirlsStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
