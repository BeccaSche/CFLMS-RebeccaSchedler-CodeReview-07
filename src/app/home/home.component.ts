import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  contact = new FormGroup({
    fullname: new FormControl('',Validators.required),
    adress: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitted: boolean = false;
  onSubmit() {
    if (this.contact.valid) {
      this.submitted = true;
    }
  }

}
