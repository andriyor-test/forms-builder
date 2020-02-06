import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesViewComponent } from './checkboxes-view.component';

describe('CheckboxesComponent', () => {
  let component: CheckboxesViewComponent;
  let fixture: ComponentFixture<CheckboxesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
