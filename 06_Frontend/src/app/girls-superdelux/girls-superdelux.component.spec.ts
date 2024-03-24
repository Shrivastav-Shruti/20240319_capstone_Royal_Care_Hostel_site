import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsSuperdeluxComponent } from './girls-superdelux.component';

describe('GirlsSuperdeluxComponent', () => {
  let component: GirlsSuperdeluxComponent;
  let fixture: ComponentFixture<GirlsSuperdeluxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirlsSuperdeluxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsSuperdeluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
