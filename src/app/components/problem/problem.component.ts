import {Component, Input, OnInit} from '@angular/core';
import {Field, Quantity} from "../../Quantity";

@Component({
  selector: '[app-problem]',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  // TODO Warum brauche ich das ?, das soll weg!
  @Input() quantity? : Quantity

  // TODO I don't want a default element here, can I avoid it?
  verifiedQuantity : Quantity = {name: "Lautstärke", symbol: "L", unit: "Phon", unitName: "Phon", field : Field.Mechanics};

  constructor() { }

  ngOnInit(): void {
    // TODO currently senseless, as it logs [object Object] - can I do better?
    // console.log(`found quantity ${this.quantity}`)
    if(this.quantity != null){
      this.verifiedQuantity = this.quantity!;
    }
  }

}
