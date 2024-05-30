import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDestinationComponent } from './display-destination.component';

describe('DisplayDestinationComponent', () => {
  let component: DisplayDestinationComponent;
  let fixture: ComponentFixture<DisplayDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
