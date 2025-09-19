import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardShadow]'
})
export class CardShadow {

  constructor(private element:ElementRef) { }
@HostListener('mouseenter') onMouseEnter(){
  this.element.nativeElement.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)";
}
@HostListener('mouseleave') onMouseLeave(){
 this.element.nativeElement.style.boxShadow='none'; 
}
}
