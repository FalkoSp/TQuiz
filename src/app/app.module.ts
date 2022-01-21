import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"
import { RouterModule, Routes} from "@angular/router"

// TODO do I need this here, or is there a place to configure testing?
import { RouterTestingModule } from "@angular/router/testing"

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ProblemComponent } from './components/problem/problem.component';
import { AnswerEditorComponent } from './components/answer-editor/answer-editor.component';
import { ConfigComponent } from './components/config/config.component';
import { FooterComponent } from './components/footer/footer.component';

// TODO is this the right place?
const routes : Routes = [
  {path: "", component: QuizComponent},
  {path: "config", component: ConfigComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    QuizComponent,
    ProblemComponent,
    AnswerEditorComponent,
    ConfigComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {enableTracing: false}),
    RouterTestingModule
  ],
  providers: [NgModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
