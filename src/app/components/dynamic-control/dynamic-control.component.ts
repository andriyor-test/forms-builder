import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';

import {AnswerDirective} from '../../answer.directive';
import {ComponentType} from '../../models/answer-types.types';
import {components} from '../../constants/components';
import {Field} from '../../models/config.types';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.css']
})
export class DynamicControlComponent implements OnInit {
  @Input() field: Field;
  @Input() formGroup: FormGroup;
  types: ComponentType[] = components;
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
