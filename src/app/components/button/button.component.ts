import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text? : string

  // this declares an outgoing event
  @Output() buttonClick : EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  // this event comes from the button element in button.component.html
  buttonOnClick(){
    console.log(`Button: ${this.text} clicked.`)
    // this event can now be used for the app-button tag
    this.buttonClick.emit(this.text)
  }

}
