import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownEditComponent } from './dropdown-edit.component';

describe('DropdownEditComponent', () => {
  let component: DropdownEditComponent;
  let fixture: ComponentFixture<DropdownEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
