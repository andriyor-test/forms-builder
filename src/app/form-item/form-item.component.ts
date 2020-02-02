import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
// import { types } from '../constants';
import { edit } from '../constants/components';
import {AnswerType} from '../models/answer-types.types';
import {AnswerDirective} from '../answer.directive';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {
  selectedAnswerType;
  types: AnswerType[] = edit;
  @Input() control;
  @Input() form;
  @ViewChild(AnswerDirective, {static: true}) adHost: AnswerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }


  ngOnInit() {
    console.log(this.control);
    this.onValueChange();
  }

  onValueChange() {
    const selectedAnswerTypeIndex = this.types.findIndex(t => t.value === this.control.type );
    const answerItem = this.types[selectedAnswerTypeIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(answerItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.control = this.control;
    componentRef.instance.form = this.form;
  }

  removeFirmField() {

  }

  duplicateFirmField() {

  }
}
