import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeElementsComponent } from './three-elements.component';

describe('ThreeElementsComponent', () => {
  let component: ThreeElementsComponent;
  let fixture: ComponentFixture<ThreeElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
