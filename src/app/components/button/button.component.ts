import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text? : string

  @Output() buttonClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  buttonOnClick(){
    console.log(`Button ${this.text} clicked.`)
    // this event can now be used for the app-button tag
    this.buttonClick.emit({"name":this.text, "event": event})
  }

}
