import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBoatComponent } from './single-boat.component';

describe('SingleBoatComponent', () => {
  let component: SingleBoatComponent;
  let fixture: ComponentFixture<SingleBoatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleBoatComponent]
    });
    fixture = TestBed.createComponent(SingleBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
