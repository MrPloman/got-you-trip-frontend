import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { BudgetModel } from 'src/app/shared/models/budget.model';
import { QuestionModel } from 'src/app/shared/models/question.model';
@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  public nextQuestionToShow(
    question: QuestionModel,
    questions: QuestionModel[],
    form: BudgetModel
  ): number {
    if (!question || !question.nextStep) return 0;
    else {
      if (
        (question.step === 2 &&
          form.structure.controls['question1'].value === 'romantic') ||
        (question.step === 6 &&
          form.structure.controls['question7'].value === 'airbnb') ||
        (question.step === 8 &&
          form.structure.controls['question9'].value !== 'dinne')
      ) {
        return questions[question.nextStep + 1].step;
      } else if (
        (question.step === 10 &&
          form.structure.controls['question11'].value !== 'city') ||
        (question.step === 6 &&
          form.structure.controls['question7'].value === 'hostel')
      ) {
        return questions[question.nextStep + 2].step;
      } else {
        return questions[question.nextStep].step;
      }
    }
  }

  public previousQuestionToShow(
    question: QuestionModel,
    questions: QuestionModel[],
    form: BudgetModel
  ): number | null {
    if (!question || question.previousStep === null) return null;
    else {
      if (
        question.nextStep &&
        ((question.previousStep === 3 &&
          form.structure.controls['question1'].value === 'romantic') ||
          (question.previousStep === 7 &&
            form.structure.controls['question7'].value === 'airbnb') ||
          (question.previousStep === 7 &&
            form.structure.controls['question7'].value === 'hostel') ||
          (question.previousStep === 8 &&
            form.structure.controls['question7'].value !== 'airbnb'))
      ) {
        return questions[question.previousStep - 1].step;
      } else if (
        question.previousStep === 12 &&
        form.structure.controls['question11'].value === 'nature'
      ) {
        return questions[question.previousStep - 2].step;
      } else {
        return question.previousStep;
      }
    }
  }
  public updateSelectableOrWritabbleValues(form: BudgetModel): BudgetModel {
    if (
      form.structure.controls['question3'].value &&
      form.structure.controls['question1'].value !== 'romantic'
    ) {
      form.structure.controls['question4'].addValidators([
        Validators.max(form.structure.controls['question3'].value),
      ]);
    }
    return form;
  }
}
