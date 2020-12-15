import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPlusOneComponent } from './two-plus-one.component';

describe('TwoPlusOneComponent', () => {
  let component: TwoPlusOneComponent;
  let fixture: ComponentFixture<TwoPlusOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoPlusOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPlusOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
