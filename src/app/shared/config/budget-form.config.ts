import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BudgetModel } from '../models/budget.model';
import { questions } from './questions.config';
const _questions = questions;
export const budgetForm: BudgetModel = new BudgetModel(new FormGroup({}));

_questions.forEach((question) => {
  budgetForm.structure.addControl(question.question, question.answer);
  if (question.required) {
    budgetForm.structure.controls[question.question].addValidators([
      Validators.required,
    ]);
  }

  if (question.step == 1) {
    budgetForm.structure.controls[question.question].addValidators([
      Validators.nullValidator,
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(2),
      Validators.min(1),
      Validators.max(10),
    ]);
  }
  if (question.step == 2) {
    budgetForm.structure.controls[question.question].addValidators([
      Validators.minLength(1),
      Validators.maxLength(2),
      Validators.min(1),
      Validators.max(10),
    ]);
  }
  if (question.step == 7) {
    budgetForm.structure.controls[question.question].addValidators([
      Validators.nullValidator,
      Validators.required,
      Validators.maxLength(100),
      Validators.min(2),
      Validators.max(100),
    ]);
  }
});
