import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  // I'd like to use the same name "nextQuiz", can I somehow? Or declare a reemit?
  @Output() newQuiz : EventEmitter<boolean> = new EventEmitter()

  ngOnInit(): void {
  }

  nextQuiz(v?:any){
    // TODO how do I get the value??
    console.log(`nextQuiz called with arg ${v}`)
    this.newQuiz.emit(true) // TODO where does this emitted value go???
  }

}
