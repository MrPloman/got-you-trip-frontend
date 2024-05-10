import { Injectable } from '@angular/core';
import { QuestionModel } from 'src/app/shared/models/question.model';
@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  protected nextQuestionToShow(
    question: QuestionModel,
    questions: QuestionModel[]
  ) {
    questions.find((questionFound) => {
      if (questionFound.question == question.question) {
      }
    });
  }
}
