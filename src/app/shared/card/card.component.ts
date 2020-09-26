import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { SelectDirective } from '../select.directive';

@Component({
  selector: 'cn-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @ContentChildren(SelectDirective) selectDirectives: QueryList<SelectDirective>;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSelections() {
    this.selectDirectives.forEach(selectDirective => {
      selectDirective.handleClick();
    });
  }
}
