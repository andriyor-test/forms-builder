import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';

import {components} from '../../constants/components';
import {ComponentType} from '../../models/answer-types.types';
import {AnswerDirective} from '../../answer.directive';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {
  types: ComponentType[] = components;
  @Input() control;
  @Input() form;
  @ViewChild(AnswerDirective, {static: true}) adHost: AnswerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.onValueChange();
  }

  onValueChange() {
    const selectedAnswerTypeIndex = this.types.findIndex(t => t.value === this.control.type );
    const answerItem = this.types[selectedAnswerTypeIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(answerItem.editComponent);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.control = this.control;
    componentRef.instance.form = this.form;
  }
}
