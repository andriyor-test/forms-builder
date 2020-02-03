import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoicesEditComponent } from './multiple-choices-edit.component';

describe('MultipleChoicesEditComponent', () => {
  let component: MultipleChoicesEditComponent;
  let fixture: ComponentFixture<MultipleChoicesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoicesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoicesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
