import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {

  config = {
    style : "dark",
    email : ""
  }

  constructor() { }

  // TODO I want the email to be either "" or something@stuff.tld

  onSubmit(form : NgForm) {
    console.log("Form submitted: ", form)
  }

}
