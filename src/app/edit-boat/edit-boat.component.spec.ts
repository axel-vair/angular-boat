import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoatComponent } from './edit-boat.component';

describe('EditBoatComponent', () => {
  let component: EditBoatComponent;
  let fixture: ComponentFixture<EditBoatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBoatComponent]
    });
    fixture = TestBed.createComponent(EditBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
