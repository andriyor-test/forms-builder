import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';

import { AnswerDirective } from '../../answer.directive';
import { ComponentType } from '../../models/component.types';
import { componentsTypes } from '../../constants/components-types';
import { Field } from '../../models/form-item.types';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.css']
})
export class DynamicControlComponent implements OnInit {
  types: ComponentType[] = componentsTypes;
  @Input() field: Field;
  @Input() formGroup: FormGroup;
  @ViewChild(AnswerDirective, {static: true}) adHost: AnswerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.onValueChange();
  }

  onValueChange() {
    const selectedAnswerTypeIndex = this.types.findIndex(t => t.value === this.field.type );
    const answerItem = this.types[selectedAnswerTypeIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(answerItem.viewComponent);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.field = this.field;
    componentRef.instance.formGroup = this.formGroup;
  }

}
