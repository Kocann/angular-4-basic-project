import {
  Directive,
  ElementRef, 
  HostListener, 
  HostBinding, 
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

// works!! but deleted from html becuase bootstrap works! :)

export class DropdownDirective {
  @HostBinding('class.show') show: boolean = true;

  constructor(private elRef: ElementRef, private rendered: Renderer2) {}

  @HostListener('click') click() {
    if (this.show) {
      this.rendered.addClass(this.elRef.nativeElement, 'show');
    } else {
      this.rendered.removeClass(this.elRef.nativeElement, 'show');
    }
    this.show = !this.show;
  }
}