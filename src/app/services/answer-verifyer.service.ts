import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerVerifyerService {

  constructor() { }

  verify(kind: string, goal: string, answer: string) : boolean {
    switch (kind){
      case  "name": {return answer.toLowerCase() == goal.toLowerCase()}
      default: {return answer == goal}
    }

  }
}
