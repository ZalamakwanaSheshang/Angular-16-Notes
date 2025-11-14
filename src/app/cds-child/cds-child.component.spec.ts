import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsChildComponent } from './cds-child.component';

describe('CdsChildComponent', () => {
  let component: CdsChildComponent;
  let fixture: ComponentFixture<CdsChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdsChildComponent]
    });
    fixture = TestBed.createComponent(CdsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
