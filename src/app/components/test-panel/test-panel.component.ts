import { Component, OnInit } from '@angular/core';
import {FactorizerService} from "../../services/factorizer.service";
import {Observable, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-test-panel',
  templateUrl: './test-panel.component.html',
  styleUrls: ['./test-panel.component.css']
})
export class TestPanelComponent implements OnInit {

  n : number = 120
  text : string = ""

  every10Seconds: Observable<number> = timer(0, 10000);
  private subscription : Subscription = this.every10Seconds.subscribe((seconds) => {
    this.text = ""
    this.n = Math.floor(Math.random() * (65536)) + 1
    this.factorizer.factorize(this.n).subscribe((result ) => this.setter(result))
  })

  constructor(private factorizer : FactorizerService) { }

  setter(result: number[]) : void {
//    console.log(`Received ${result}.`)
    const t = `${this.n} has the prime factors ${String(result)}.`
    this.text = t
  }

  ngOnInit(): void {
  }

}
