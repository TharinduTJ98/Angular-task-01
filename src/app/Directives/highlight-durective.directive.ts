import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDurective]'
})
export class HighlightDurectiveDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }
  constructor(private el: ElementRef) { }

  highlight(colour:string) {
    this.el.nativeElement.style.backgroundColor = colour;
  }
}
