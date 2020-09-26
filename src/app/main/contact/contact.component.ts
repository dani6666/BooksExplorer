import { Component, OnInit } from '@angular/core';
import { GlobalTestService } from '../../core/global-test.service';

@Component({
  selector: 'cn-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private testService: GlobalTestService) { }

  ngOnInit(): void {
  }

  handleSave(msg) {
    console.log(msg)
    this.testService.sendMessage(msg).subscribe(() => alert('message sent. thank you'))
  }

}
