import { Component, OnInit} from '@angular/core';
import { UiSignalsService } from '../../services/ui-signals.service'
import { Router } from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private uiSignals: UiSignalsService, private router : Router) { }

  ngOnInit(): void {
  }

  nextQuiz(v?:any){
    // TODO how do I get the value??
    console.log(`nextQuiz called with arg ${v}`)
    this.uiSignals.requestNextQuiz()
  }

  quizVisible() : boolean {
    return this.router.url === '/'
  }

}
