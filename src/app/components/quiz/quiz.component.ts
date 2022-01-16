import { Component, OnInit} from '@angular/core';
import { Subscription } from "rxjs";
import { Quantity } from "../../Quantity";
import { QuizProviderService } from "../../services/quiz-provider.service";
import { UiSignalsService } from "../../services/ui-signals.service"

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz : Quantity[] = []
  completed : boolean = false
  newQuizRequests : Subscription

  constructor(private quizProvider : QuizProviderService, private uiSignals : UiSignalsService) {
    this.newQuizRequests = uiSignals.quizRequested().subscribe(() => this.quizProvider.getQuiz().subscribe((quiz) => this.quiz = quiz))
  }

  ngOnInit(): void {
    this.quizProvider.getQuiz().subscribe((quiz) => this.quiz = quiz)
  }

}
