import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"
import { RouterModule, Routes} from "@angular/router"

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ProblemComponent } from './components/problem/problem.component';
import { TestPanelComponent } from './components/test-panel/test-panel.component';
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
    TestPanelComponent,
    AnswerEditorComponent,
    ConfigComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
