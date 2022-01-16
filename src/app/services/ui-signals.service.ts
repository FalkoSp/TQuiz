import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiSignalsService {

  quizNumber = 1

  private nextQuiz = new Subject<number>()

  constructor() { }

  requestNextQuiz(){
    console.log("New quiz requested.")
    this.nextQuiz.next(this.quizNumber++)
  }

  quizRequested(): Observable<number>{
    return this.nextQuiz.asObservable()
  }
}
