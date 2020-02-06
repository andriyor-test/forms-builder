import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortAnswerViewComponent } from './short-answer-view.component';

describe('ShortAnswerComponent', () => {
  let component: ShortAnswerViewComponent;
  let fixture: ComponentFixture<ShortAnswerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortAnswerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortAnswerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
