import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAnswerHost]',
})
export class AnswerDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
