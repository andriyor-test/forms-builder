import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer.component.html',
  styleUrls: ['./short-answer.component.css']
})
export class ShortAnswerComponent implements OnInit {
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
