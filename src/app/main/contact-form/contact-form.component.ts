import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cn-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Output() save =  new EventEmitter();
  contactForm = new FormGroup({
    email: new FormControl(null, [Validators.email]),
    message: new FormControl(null, [Validators.maxLength(100), this.badWordsValidator])
  });

  constructor() { }

  ngOnInit(): void {
  }

  badWordsValidator(control: AbstractControl) {
    return control.value && control.value.includes('dupa') ? { badWords: true } : null;
  }

  handleSubmit() {
    console.log(this.contactForm.valid)
    if(this.contactForm.valid) {
      this.save.emit(this.contactForm.value);
    }
  }

}
