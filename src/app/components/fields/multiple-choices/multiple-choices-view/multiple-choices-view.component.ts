import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Field} from '../../../../models/config.types';

@Component({
  selector: 'app-multiple-choices',
  templateUrl: './multiple-choices-view.component.html',
  styleUrls: ['./multiple-choices-view.component.css']
})
export class MultipleChoicesViewComponent implements OnInit {
  @Input() field: Field;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
