import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms"

import { ProblemComponent } from './problem.component';
import { AnswerEditorComponent } from "../answer-editor/answer-editor.component"

describe('ProblemComponent', () => {
  let component: ProblemComponent;
  let fixture: ComponentFixture<ProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ProblemComponent, AnswerEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
