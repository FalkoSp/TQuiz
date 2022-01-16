import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tornow Quiz';

  newQuiz(){
    console.log("trying to restart")
    // TODO is this the way to do such things?
    window.location.reload()
  }

}
