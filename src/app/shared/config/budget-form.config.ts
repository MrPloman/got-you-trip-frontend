import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BudgetModel } from '../models/budget.model';
import { questions } from './questions.config';
const _questions = questions;
function InferiorDateValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  if (!control.value) return { invalidSymbols: true };
  else {
    if (control.value instanceof Date) {
      const today = new Date().getTime();
      if (today < control.value.getTime()) {
        return null;
      } else return { invalidSymbols: true };
    } else return { invalidSymbols: true };
  }
}

export const budgetForm: BudgetModel = new BudgetModel(new FormGroup({}));

_questions.forEach((question) => {
  budgetForm.structure.addControl(question.question, question.answer);
  if (question.required) {
    budgetForm.structure.controls[question.question].addValidators([
      Validators.required,
    ]);
  }

  if (question.step == 2) {
    budgetForm.structure.controls[question.question].addValidators([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(2),
      Validators.min(1),
      Validators.max(10),
    ]);
  }
  if (question.step == 3) {
    budgetForm.structure.controls[question.question].addValidators([
      Validators.minLength(1),
      Validators.maxLength(2),
      Validators.min(1),
      Validators.max(10),
    ]);
  }
  if (question.step == 13) {
    budgetForm.structure.controls[question.question].addValidators([
      Validators.nullValidator,
      Validators.required,
      Validators.maxLength(100),
      Validators.min(2),
      Validators.max(100),
    ]);
  }
  if (question.step == 14) {
    budgetForm.structure.controls[question.question].addValidators([
      Validators.nullValidator,
      Validators.required,
      InferiorDateValidator,
    ]);
  }
  if (question.step == 16) {
    budgetForm.structure.controls[question.question].addValidators([
      Validators.nullValidator,
      Validators.required,
    ]);
  }
  if (question.step == 17) {
    budgetForm.structure.controls[question.question].addValidators([
      Validators.nullValidator,
      Validators.required,
      Validators.email,
    ]);
  }
});
