import { Directive } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {
color: string = 'yellow';
  constructor() { }

}
