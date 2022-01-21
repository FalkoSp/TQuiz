import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms"

import { AnswerEditorComponent } from './answer-editor.component';

describe('CellEditorComponent', () => {
  let component: AnswerEditorComponent;
  let fixture: ComponentFixture<AnswerEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ AnswerEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
