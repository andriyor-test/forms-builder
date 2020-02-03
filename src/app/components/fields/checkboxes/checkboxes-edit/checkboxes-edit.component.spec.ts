import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesEditComponent } from './checkboxes-edit.component';

describe('CheckboxesEditComponent', () => {
  let component: CheckboxesEditComponent;
  let fixture: ComponentFixture<CheckboxesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
