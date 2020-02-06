import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoicesViewComponent } from './multiple-choices-view.component';

describe('MultipleChoicesComponent', () => {
  let component: MultipleChoicesViewComponent;
  let fixture: ComponentFixture<MultipleChoicesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoicesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoicesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
