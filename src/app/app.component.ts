import { Component } from '@angular/core';

@Component({
  selector: 'cn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'books-explorer-proj';
}

//selector 'cn-root' ===>  <cn-root></cn-root>
//selector '[cn-root]' ===> <div cn-root></div>
//selector '.cn-root' ===> <div class="cn-root"></div>
