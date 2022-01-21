import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizComponent } from './quiz.component';
import { FooterComponent } from "../footer/footer.component"
import { ProblemComponent } from "../problem/problem.component"
import { AnswerEditorComponent } from "../answer-editor/answer-editor.component"
import { FormsModule } from "@angular/forms"


describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ QuizComponent, FooterComponent, ProblemComponent, AnswerEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
