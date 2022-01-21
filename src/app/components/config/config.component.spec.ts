import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms"

import { DebugElement } from "@angular/core"
import { By } from "@angular/platform-browser"

import { ConfigComponent } from './config.component';

describe('ConfigComponent', () => {
  let component: ConfigComponent;
  let fixture: ComponentFixture<ConfigComponent>;

  let htmlElement : HTMLElement
  let debugElement : DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigComponent);
    component = fixture.componentInstance;

    debugElement = fixture.debugElement.query(By.css("h3"))
    htmlElement = debugElement.nativeElement

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Konfiguration', () => {
    expect(htmlElement.textContent).toEqual("Konfiguration")
  });


});
