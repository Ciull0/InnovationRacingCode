import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideComponent } from './wide.component';

describe('WideComponent', () => {
  let component: WideComponent;
  let fixture: ComponentFixture<WideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
