import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }
  get f() {
    return this.contactForm.controls;
   }
  get fValid() {
    return this.contactForm.invalid;
  }
  submitForm() {
    console.log('hitting submit form');
    console.log(this.contactForm);
    const email = {
      subject: 'New Contact',
      // tslint:disable-next-line:max-line-length
      body: `Hi I am ${this.contactForm.value.name} trying to contact you. My email address ${this.contactForm.value.email} and phone number ${this.contactForm.value.phone}`
    };
    window.open(`mailto:vishav.jh@gmail.com?subject=${email.subject}&body=${email.body}`);
  }

}
