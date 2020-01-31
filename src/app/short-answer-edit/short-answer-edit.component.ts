import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-answer-edit',
  templateUrl: './short-answer-edit.component.html',
  styleUrls: ['./short-answer-edit.component.css']
})
export class ShortAnswerEditComponent implements OnInit {
  selectedInputType;
  selectedOption;

  inputTypes = [
    {
      title: 'Number',
      options: [
        {title: 'Contains'},
        {title: 'Doesn\'t contain'},
        {title: 'Email address'},
        {title: 'URL'},
      ]
    },
    {title: 'Text'},
    {title: 'Length'},
    {title: 'Regular expression'},
  ];

  constructor() { }

  ngOnInit() {
  }

  onValueChange() {

  }

}
