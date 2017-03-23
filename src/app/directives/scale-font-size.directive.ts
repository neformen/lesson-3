import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScaleFontSize]'
})
export class ScaleFontSizeDirective {
  @Input() fontSize: number;
  @Input() color: string;
  private el: HTMLElement;
  private toggleClick = false;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('click') onClick() {
    const fontSize = this.toggleClick ? 16 : this.fontSize ;
    const color = this.toggleClick ? 'black' : this.color;
    this.el.style.color = color;
    this.el.style.fontSize = `${fontSize}px`;
    this.toggleClick = !this.toggleClick;
  }

}
