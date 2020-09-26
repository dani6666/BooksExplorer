import { Directive, Input, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[cnMyStruct]'
})
export class MyStructDirective {

  @Input()
  set cnMyStruct(isVisible: boolean){
    if (isVisible) {
      this.vcr.createEmbeddedView(this.template);
    } else {
      this.vcr.clear();
    }
  }

  constructor(private template: TemplateRef<any>, private vcr: ViewContainerRef) { }


}
