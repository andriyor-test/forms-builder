import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {AnswerDirective} from '../answer.directive';
import {AnswerType} from '../models/answer-types.types';
import { types } from '../constants';

@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.css']
})
export class DynamicControlComponent implements OnInit {
  @Input() control;
  @Input() group;
  types: AnswerType[] = types;
  @ViewChild(AnswerDirective, {static: true}) adHost: AnswerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const selectedAnswerTypeIndex = this.types.findIndex(t => t.value === this.control.type );
    const answerItem = this.types[selectedAnswerTypeIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(answerItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.control = this.control;
    componentRef.instance.group = this.group;
  }

}
