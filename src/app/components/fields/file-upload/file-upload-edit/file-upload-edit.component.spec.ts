import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadEditComponent } from './file-upload-edit.component';

describe('FileUploadEditComponent', () => {
  let component: FileUploadEditComponent;
  let fixture: ComponentFixture<FileUploadEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
