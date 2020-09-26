import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type = 'primary';
  constructor() { }

  ngOnInit(): void {
  }

}
