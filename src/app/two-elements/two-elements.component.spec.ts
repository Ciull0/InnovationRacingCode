import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoElementsComponent } from './two-elements.component';

describe('TwoElementsComponent', () => {
  let component: TwoElementsComponent;
  let fixture: ComponentFixture<TwoElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
