import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleClasseComponentComponent } from './single-classe.component';

describe('SingleClasseComponentComponent', () => {
  let component: SingleClasseComponentComponent;
  let fixture: ComponentFixture<SingleClasseComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleClasseComponentComponent]
    });
    fixture = TestBed.createComponent(SingleClasseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
