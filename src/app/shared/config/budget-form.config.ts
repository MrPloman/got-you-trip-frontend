import { FormControl, FormGroup } from '@angular/forms';
import { BudgetModel } from '../models/budget.model';
import { questions } from './questions.config';
const _questions = questions;
export const budgetForm: BudgetModel = new BudgetModel(new FormGroup({}));

_questions.forEach((question) => {
  budgetForm.structure.addControl(question.question, question.answer);
});
