import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortAnswerEditComponent } from './short-answer-edit.component';

describe('ShortAnswerEditComponent', () => {
  let component: ShortAnswerEditComponent;
  let fixture: ComponentFixture<ShortAnswerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortAnswerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortAnswerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
