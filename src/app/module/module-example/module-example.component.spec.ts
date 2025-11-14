import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleExampleComponent } from './module-example.component';

describe('ModuleExampleComponent', () => {
  let component: ModuleExampleComponent;
  let fixture: ComponentFixture<ModuleExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleExampleComponent]
    });
    fixture = TestBed.createComponent(ModuleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
