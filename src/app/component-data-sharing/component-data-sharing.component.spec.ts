import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDataSharingComponent } from './component-data-sharing.component';

describe('ComponentDataSharingComponent', () => {
  let component: ComponentDataSharingComponent;
  let fixture: ComponentFixture<ComponentDataSharingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentDataSharingComponent]
    });
    fixture = TestBed.createComponent(ComponentDataSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
