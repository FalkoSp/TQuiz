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
  active : boolean = true

  every10Seconds: Observable<number> = timer(0, 10000);
  private subscription : Subscription = this.every10Seconds.subscribe((seconds) => {
    this.text = ""
    if(this.active){
      this.n = Math.floor(Math.random() * (65536)) + 1
      this.factorizer.factorize(this.n).subscribe((result ) => this.setter(result))
    }
  })

  constructor(private factorizer : FactorizerService) { }

  setter(result: number[]) : void {
    const t = `${this.n} has the prime factors ${String(result)}.`
    this.text = t
  }

  ngOnInit(): void {
  }

}
