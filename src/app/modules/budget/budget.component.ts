import { animate, style, transition, trigger } from '@angular/animations';
import { Component, signal } from '@angular/core';
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
        }), //apply default styles before animation starts
        animate(
          '400ms 400ms',
          style({
            opacity: 1,
            transform: 'translateY(0%)',
          })
        ),
      ]),
      transition(':leave', [
        style({
          opacity: 1,
          transform: 'translateY(0%)',
        }), //apply default styles before animation starts
        animate(
          '400ms',
          style({
            opacity: 0,
            transform: 'translateY(-50%)',
          })
        ),
      ]),
    ]),
  ],
})
export class BudgetComponent {
  protected budgetQuestions = signal(questions);
  public position = 0;

  get getQuestion() {
    return this.budgetQuestions();
  }
  public clicka() {
    this.position++;
  }
}
