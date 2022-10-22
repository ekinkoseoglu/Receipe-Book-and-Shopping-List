import { Directive,HostListener,OnInit,HostBinding,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
   @HostBinding('class.open') openToggle: boolean = false;
   
    @HostListener("click")  changeToggle() {
    this.openToggle = !this.openToggle;
    }
  constructor(private el:ElementRef) {}

  ngOnInit(): void {
   
  }
 
}
