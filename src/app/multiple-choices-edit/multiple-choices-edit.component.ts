import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choices-edit',
  templateUrl: './multiple-choices-edit.component.html',
  styleUrls: ['./multiple-choices-edit.component.css']
})
export class MultipleChoicesEditComponent implements OnInit {
  @Input() control;

  constructor() { }

  ngOnInit() {
    console.log(this.control);
  }

}
