import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { EmptyBudgetCalculation } from 'src/app/shared/config/empty-budget-calculation.config';
import { BudgetModel } from 'src/app/shared/models/budget.model';
import { CalculationModel } from 'src/app/shared/models/calculation.model';
import { QuestionModel } from 'src/app/shared/models/question.model';
@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private budgetExpenses: CalculationModel = EmptyBudgetCalculation;

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
  public getBudget(form: BudgetModel): CalculationModel {
    // Setting Budget Title

    this.budgetExpenses.data.name = form.structure.controls['question17'].value;
    this.budgetExpenses.data.type = form.structure.controls['question1'].value;
    this.budgetExpenses.data.destination =
      form.structure.controls['question2'].value;
    this.budgetExpenses.data.people =
      form.structure.controls['question3'].value;
    this.budgetExpenses.data.child = form.structure.controls['question4'].value
      ? form.structure.controls['question4'].value
      : 0;
    this.budgetExpenses.data.duration =
      form.structure.controls['question14'].value;
    this.budgetExpenses.data.lodge = form.structure.controls['question7'].value;
    this.budgetExpenses.data.transportation =
      form.structure.controls['question5'].value;

    // Getting Month
    const month = form.structure.controls['question15'].value.toLocaleString(
      'default',
      { month: 'long' }
    );
    this.budgetExpenses.data.season = month;

    // Setting factors
    this.setFactors();

    if (this.budgetExpenses.data.budget) {
      this.budgetExpenses.data.budget.transportation =
        this.calculateTransportation(form);
      this.budgetExpenses.data.budget.lodge = this.calculateLodge(form);
      this.budgetExpenses.data.budget.activities =
        this.calculateActivities(form);
      this.budgetExpenses.data.budget.food = this.calculateFood(form);
    }
    // Getting calculation

    this.budgetExpenses.data.budget.total = this.calculateTotal();
    console.log(this.budgetExpenses);
    return this.budgetExpenses;
  }
  private setFactors() {}
  private calculateTransportation(form: BudgetModel): {
    total: number;
    expenses: { name: string; value: number }[];
  } {
    if (form)
      return {
        total: 10,
        expenses: [],
      };
    else return { total: 0, expenses: [] };
  }
  private calculateLodge(form: BudgetModel) {
    if (form)
      return {
        total: 10,
        expenses: [],
      };
    else return { total: 0, expenses: [] };
  }
  private calculateFood(form: BudgetModel) {
    if (form)
      return {
        total: 10,
        expenses: [],
      };
    else return { total: 0, expenses: [] };
  }
  private calculateActivities(form: BudgetModel) {
    if (form)
      return {
        total: 10,
        expenses: [],
      };
    else return { total: 0, expenses: [] };
  }
  private calculateTotal(): number {
    return (
      this.budgetExpenses.data.budget.activities.total +
      this.budgetExpenses.data.budget.lodge.total +
      this.budgetExpenses.data.budget.food.total +
      this.budgetExpenses.data.budget.transportation.total
    );
  }
}
