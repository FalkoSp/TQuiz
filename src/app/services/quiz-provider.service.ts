import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {quantities} from "../quantities";
import {Quantity, Quiz} from "../Quantity";

@Injectable({
  providedIn: 'root'
})
export class QuizProviderService {

  allQuantities : Quantity[] = quantities

  constructor() { }

  // TODO is there a default way to include helper functions?
  randSubarray(all: Quiz, n : number) : Quiz{
    if(n > all.length){
      throw new Error("Can not produce random array longer than the data I have.");
    }
    const quiz : Quiz = []
    while (quiz.length < n){
      const randomElement = all[Math.floor(Math.random() * all.length)]
      if(!quiz.includes(randomElement)){
        quiz.push(randomElement)
      }
    }
    return quiz
  }

  getQuiz() : Observable<Quiz>{
    return of(this.randSubarray(this.allQuantities, 5))
  }
}
