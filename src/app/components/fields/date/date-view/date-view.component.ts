import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Field} from '../../../../models/config.types';

@Component({
  selector: 'app-date',
  templateUrl: './date-view.component.html',
  styleUrls: ['./date-view.component.css']
})
export class DateViewComponent implements OnInit {
  @Input() field: Field;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
