import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Field} from '../../../../models/config.types';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down-view.component.html',
  styleUrls: ['./drop-down-view.component.css']
})
export class DropDownViewComponent implements OnInit {
  @Input() field: Field;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }
}