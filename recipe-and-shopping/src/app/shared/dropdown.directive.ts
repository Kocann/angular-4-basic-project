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
  @HostBinding('class.show') isOpen: boolean = true;

  constructor(private elRef: ElementRef, private rendered: Renderer2) {}

  @HostListener('click') click() {
    if (this.isOpen) {
      this.rendered.addClass(this.elRef.nativeElement, 'show');
    } else {
      this.rendered.removeClass(this.elRef.nativeElement, 'show');
    }
    this.isOpen = !this.isOpen;
  }

  //much simpler it would be like so:
  // @HostBinding('class.show') isOpen: boolean = false;
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
  // because everytime is open is set to true the show class will be added to the host element
}