import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ProblemComponent } from './components/problem/problem.component';
import { TestPanelComponent } from './components/test-panel/test-panel.component';
import { AnswerEditorComponent } from './components/answer-editor/answer-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    QuizComponent,
    ProblemComponent,
    TestPanelComponent,
    AnswerEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
