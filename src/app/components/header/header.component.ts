import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nextQuiz(v?:any){
    // TODO how do I get the value??
    console.log(`nextQuiz called with arg ${v}`)
  }

}
