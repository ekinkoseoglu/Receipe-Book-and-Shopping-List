import { Directive,ElementRef,OnInit,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective implements OnInit {

    @Input() appHighlight: string;
    
 
  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
    
      
  }
   
  ngOnInit() {
    // We can't access the native element until the ngOnInit lifecycle hook
 
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }
 
}
