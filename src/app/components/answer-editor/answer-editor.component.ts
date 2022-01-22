import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Field, Quantity } from "../../Quantity";
import { AnswerVerifyerService } from "../../services/answer-verifyer.service"

@Component({
  selector: 'app-answer-editor',
  templateUrl: './answer-editor.component.html',
  styleUrls: ['./answer-editor.component.css']
})
export class AnswerEditorComponent {

  @Input() kind : string = ""
  @Input() goal : string = ""

  answer : string = ""
  correct : boolean = false

  @Output() accepted : EventEmitter<boolean> = new EventEmitter()

  constructor(private verifyer : AnswerVerifyerService) { }
  
  onAnswerChange(answerValue: string): void {
    let correctAnswer = this.verifyer.verify(this.kind, this.goal, answerValue)
    if(this.correct != correctAnswer){
      this.correct = correctAnswer
      console.log(answerValue, " -> ", correctAnswer, "emitting.");
      this.accepted.emit(this.correct)
    }
  }

}
