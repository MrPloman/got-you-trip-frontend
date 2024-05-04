import { FormControl, FormGroup } from '@angular/forms';
import { QuestionModel } from './question.model';

export class BudgetModel {
  public structure: FormGroup;
  constructor(structure: FormGroup) {
    this.structure = structure;
  }
}
