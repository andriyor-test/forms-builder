import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import { types } from './constants';
import {AnswerType} from './models/answer-types.types';
import {AnswerDirective} from './answer.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedAnswerType;
  types: AnswerType[] = types;
  @ViewChild(AnswerDirective, {static: true}) adHost: AnswerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  onValueChange() {
    const selectedAnswerTypeIndex = this.types.findIndex(t => t.title === this.selectedAnswerType );
    const answerItem = this.types[selectedAnswerTypeIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(answerItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}
