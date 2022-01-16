import {Component, Input, OnInit} from '@angular/core';
import {Field, Quantity} from "../../Quantity";

@Component({
  selector: '[app-problem]',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  // TODO Warum brauche ich das "?" ? - das soll weg!
  @Input() quantity? : Quantity

  solved : boolean = false;
  offerHint : boolean = true
  showName : boolean = false
  showSymbol : boolean = false
  showUnit : boolean = false

  // TODO I don't want a default element here, can I avoid it?
  verifiedQuantity : Quantity = {name: "Lautstärke", symbol: "L", unit: "Phon", unitName: "Phon", field : Field.Mechanics};

  constructor() { }

  ngOnInit(): void {
    // TODO currently senseless, as it logs [object Object] - can I do better?
    //console.log(`found quantity ${this.quantity}`)
    if(this.quantity != null){
      this.verifiedQuantity = this.quantity!;
    }
    let n = Math.floor(Math.random() * (3))
    switch(n){
      case 0 : {this.showName = true; break}
      case 1 : {this.showSymbol = true; break}
      case 2 : {this.showUnit = true; break}
      default: {this.showName = true; console.log(`Problem Component, ngOnInit: n must be 0, 1, or 2, but is ${n}`)}
    }
  }

  show(){
    this.solved = false
    this.offerHint = false
    this.showName = true
    this.showSymbol = true
    this.showUnit = true
  }

  // TODO How do I find out that the answer changed from correct to false?
  // So currently I just end editing
  registerAnswer(kind:string){
    console.log(`Registered answer for ${this.verifiedQuantity.name}: ${kind} is correct.`)
    switch (kind){
      case "name" : {this.showName = true; break}
      case "symbol" : {this.showSymbol = true; break}
      case "unit" : {this.showUnit = true; break}
      default: {this.showName = true; console.log(`Problem Component, registerAnswer: kind is ${kind}`)}
    }
    if(this.showName && this.showSymbol && this.showUnit){
      this.solved = true
      this.offerHint = false
    }
  }

}
