import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Field} from '../../../../models/config.types';

@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer-view.component.html',
  styleUrls: ['./short-answer-view.component.css']
})
export class ShortAnswerViewComponent implements OnInit {
  @Input() field: Field;
  @Input() formGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
