import { Component, OnInit} from '@angular/core';
import {Quantity} from "../../Quantity";
import {QuizProviderService} from "../../services/quiz-provider.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz : Quantity[] = []
  completed : boolean = false

  constructor(private quizProvider : QuizProviderService) { }

  ngOnInit(): void {
    this.quizProvider.getQuiz().subscribe((quiz) => this.quiz = quiz)
  }

}
