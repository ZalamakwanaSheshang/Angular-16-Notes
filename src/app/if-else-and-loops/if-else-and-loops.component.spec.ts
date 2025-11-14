import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseAndLoopsComponent } from './if-else-and-loops.component';

describe('IfElseAndLoopsComponent', () => {
  let component: IfElseAndLoopsComponent;
  let fixture: ComponentFixture<IfElseAndLoopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfElseAndLoopsComponent]
    });
    fixture = TestBed.createComponent(IfElseAndLoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
