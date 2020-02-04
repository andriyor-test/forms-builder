import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../../models/config.types';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph-view.component.html',
  styleUrls: ['./paragraph-view.component.css']
})
export class ParagraphViewComponent implements OnInit {
  @Input() field: Field;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
