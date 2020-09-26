import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[cnTest]',
})
export class TestDirective {
  @Input('cnTest') bgColor: string;
  @Input() cnTestBorderColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  handleClick() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background',
      this.bgColor || 'pink'
    );
    if (this.cnTestBorderColor) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid ' + this.cnTestBorderColor);
    }
  }
}
