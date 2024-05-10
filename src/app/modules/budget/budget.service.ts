import { Injectable } from '@angular/core';
import { QuestionModel } from 'src/app/shared/models/question.model';
@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  public nextQuestionToShow(
    question: QuestionModel,
    questions: QuestionModel[]
  ): number {
    console.log(question);
    if (!question || !question.nextStep) return 0;
    return questions[question.nextStep].step;
  }
}
