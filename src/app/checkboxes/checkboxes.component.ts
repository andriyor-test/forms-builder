import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {
  checkboxes = [
    {title: 'ASdad', checked: true},
  ];

  constructor() { }

  ngOnInit() {
  }

  addCheckbox() {
    this.checkboxes.push(
      {title: 'ASdad', checked: false},
    );
  }

}
