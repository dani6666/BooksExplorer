import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cnSelect]'
})
export class SelectDirective {
  private isSelected = false;
  @Input('cnSelect') className: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  handleClick(): void {
    this.isSelected ? this.unselect() : this.select();
  }

  select(): void {
    this.isSelected = true;
    this.renderer.addClass(this.el.nativeElement, this.className || 'select');
  }

  unselect(): void {
    this.isSelected = false;
    this.renderer.removeClass(this.el.nativeElement, this.className || 'select');
  }
}
