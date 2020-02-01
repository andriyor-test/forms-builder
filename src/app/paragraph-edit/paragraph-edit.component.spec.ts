import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphEditComponent } from './paragraph-edit.component';

describe('ParagraphEditComponent', () => {
  let component: ParagraphEditComponent;
  let fixture: ComponentFixture<ParagraphEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
