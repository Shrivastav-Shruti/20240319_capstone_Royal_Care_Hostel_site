import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsDeluxComponent } from './girls-delux.component';

describe('GirlsDeluxComponent', () => {
  let component: GirlsDeluxComponent;
  let fixture: ComponentFixture<GirlsDeluxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirlsDeluxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsDeluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
