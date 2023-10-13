import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatsViewComponent } from './boats.component';

describe('BoatsComponent', () => {
  let component: BoatsViewComponent;
  let fixture: ComponentFixture<BoatsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoatsViewComponent]
    });
    fixture = TestBed.createComponent(BoatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
