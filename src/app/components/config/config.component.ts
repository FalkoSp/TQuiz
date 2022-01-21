import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  config = {
    style : "dark",
    email : ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  // I want the email to be either "" or something@stuff.tld

  onSubmit(form : NgForm) {
    console.log("Form submitted: ", form)
  }

}
