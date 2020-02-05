import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { componentsTypes } from '../../constants/components-types';
import { ComponentType } from '../../models/component.types';
import { AnswerDirective } from '../../answer.directive';
import { Field } from '../../models/form-item.types';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {
  types: ComponentType[] = componentsTypes;
  @Input() field: Field;
  @Input() formGroup: FormGroup;
  @ViewChild(AnswerDirective, {static: true}) adHost: AnswerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.onValueChange();
  }

  onValueChange() {
    const selectedAnswerTypeIndex = this.types.findIndex(t => t.value === this.field.type );
    const answerItem = this.types[selectedAnswerTypeIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(answerItem.editComponent);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.field = this.field;
    componentRef.instance.formGroup = this.formGroup;
  }
}
