import { animate, style, transition, trigger } from '@angular/animations';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormService } from 'src/app/shared/components/services/form.service';
import { budgetForm } from 'src/app/shared/config/budget-form.config';
import { questions } from 'src/app/shared/config/questions.config';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss',
  animations: [
    trigger('inOutPaneAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-50%)',
          display: 'none',
        }), //apply default styles before animation starts
        animate(
          '400ms 400ms',
          style({
            opacity: 1,
            transform: 'translateY(0%)',
            display: 'inline',
          })
        ),
      ]),
      transition(':leave', [
        style({
          opacity: 1,
          transform: 'translateY(0%)',
          display: 'inline',
        }), //apply default styles before animation starts
        animate(
          '400ms',
          style({
            opacity: 0,
            display: 'none',
            transform: 'translateY(-50%)',
          })
        ),
      ]),
    ]),
  ],
})
export class BudgetComponent implements OnInit {
  protected _formService = inject(FormService);
  protected budgetQuestions = signal(questions);
  public _budgetForm = budgetForm;
  protected formStarted = false;
  public position = 0;
  ngOnInit(): void {
    console.log(this._budgetForm);
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  get getQuestion() {
    return this.budgetQuestions();
  }
  public startForm() {
    this.position = 0;
    this.formStarted = !this.formStarted;
  }
  public next() {
    this.position++;
  }
  public previous() {
    console.log(this.position);
    if (this.position == 0) this.formStarted = false;
    this.position--;
  }
}
