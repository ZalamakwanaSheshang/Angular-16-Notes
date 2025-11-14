import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleLazyLoadingComponent } from './module-lazy-loading.component';

describe('ModuleLazyLoadingComponent', () => {
  let component: ModuleLazyLoadingComponent;
  let fixture: ComponentFixture<ModuleLazyLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleLazyLoadingComponent]
    });
    fixture = TestBed.createComponent(ModuleLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
