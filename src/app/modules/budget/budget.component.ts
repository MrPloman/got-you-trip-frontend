import { animate, style, transition, trigger } from '@angular/animations';
import {
  afterNextRender,
  AfterRenderPhase,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FormService } from 'src/app/shared/services/form.service';
import { budgetForm } from 'src/app/shared/config/budget-form.config';
import { questions } from 'src/app/shared/config/questions.config';
import { BudgetService } from './budget.service';
import { CalculationModel } from 'src/app/shared/models/calculation.model';
import { EmptyBudgetCalculation } from 'src/app/shared/config/empty-budget-calculation.config';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss',
  animations: [
    trigger('globalInOut', [
      transition(':enter', [
        style({
          opacity: 0,
          display: 'none',
        }), //apply default styles before animation starts
        animate(
          '400ms 400ms',
          style({
            opacity: 1,
            display: 'inline',
          })
        ),
      ]),
      transition(':leave', [
        style({
          opacity: 1,
          display: 'inline',
        }), //apply default styles before animation starts
        animate(
          '400ms',
          style({
            opacity: 0,
            display: 'none',
          })
        ),
      ]),
    ]),
    trigger('inOutIndividualQuestionAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          display: 'none',
        }), //apply default styles before animation starts
        animate(
          '400ms 400ms',
          style({
            opacity: 1,
            display: 'flex',
          })
        ),
      ]),
      transition(':leave', [
        style({
          opacity: 1,
          display: 'flex',
        }), //apply default styles before animation starts
        animate(
          '400ms',
          style({
            opacity: 0,
            display: 'none',
          })
        ),
      ]),
    ]),
    trigger('inOutInformation', [
      transition(':enter', [
        style({
          opacity: 0,
          display: 'none',
        }), //apply default styles before animation starts
        animate(
          '400ms 400ms',
          style({
            display: 'flex',
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        style({
          opacity: 1,
          display: 'flex',
        }), //apply default styles before animation starts
        animate(
          '400ms',
          style({
            opacity: 0,
            display: 'none',
          })
        ),
      ]),
    ]),
  ],
})
export class BudgetComponent {
  private breakPoint = 2;
  protected _formService = inject(FormService);
  protected _budgetService = inject(BudgetService);
  protected budgetQuestions = signal(questions);
  public _budgetForm = budgetForm;
  public _budgetExpenses: CalculationModel = EmptyBudgetCalculation;
  protected formStarted = false;
  protected formFulfilled = false;
  protected formSubmitted = false;
  public position = 0;
  public loading: boolean = false;
  public budgetPrice = 0;
  constructor() {
    this._budgetExpenses = this._budgetService.getBudget(this._budgetForm);

    // afterNextRender(
    //   () => {
    //     this.breakPoint = window.innerWidth <= 1000 ? 1 : 2;
    //   },
    //   { phase: AfterRenderPhase.Write }
    // );
  }
  get getBreakpoint() {
    return this.breakPoint;
  }

  get getQuestion() {
    return this.budgetQuestions();
  }
  get getFulfilledQuestion() {
    return this.budgetQuestions().filter((question) => {
      if (question.answer.value) return question;
      else return;
    });
  }
  public fulfillForm() {
    this.formFulfilled = true;
  }

  public startForm() {
    this.position = 0;
    this.formStarted = !this.formStarted;
  }
  private next(questionPosition: number) {
    this._budgetForm = this._budgetService.updateSelectableOrWritabbleValues(
      this._budgetForm
    );
    const newPosition = this._budgetService.nextQuestionToShow(
      this.budgetQuestions()[questionPosition],
      this.budgetQuestions(),
      this._budgetForm
    );
    if (newPosition) {
      this.position = newPosition;
    }
  }
  public previous(questionPosition: number) {
    const previousPosition = this._budgetService.previousQuestionToShow(
      this.budgetQuestions()[questionPosition],
      this.budgetQuestions(),
      this._budgetForm
    );
    if (previousPosition === null) this.formStarted = false;
    else {
      this._budgetForm.structure.controls[
        this.budgetQuestions()[questionPosition].question
      ].setValue('');
      this._budgetForm.structure.controls[
        this.budgetQuestions()[questionPosition].question
      ].markAsUntouched();

      this.position = previousPosition;
    }
  }
  public checkAnswer(question: string, questionPosition: number) {
    if (!question) return;
    if (this._budgetForm.structure.controls[question].valid) {
      this.next(questionPosition);
    } else {
      this._budgetForm.structure.get(question)?.markAsTouched();
    }
  }
  protected checkWindowSize(event: any) {
    this.breakPoint = event.target.innerWidth <= 1000 ? 1 : 2;
  }

  protected goToThisAnswer(position: number) {
    this.position = position;
    this.formFulfilled = false;
    this.formStarted = true;
  }
  protected submitForm() {
    this.formSubmitted = true;
    this.formFulfilled = true;
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this._budgetExpenses = this._budgetService.getBudget(this._budgetForm);
    }, 2000);
  }
}
