import { FormGroup } from '@angular/forms';

export class BudgetModel {
  public structure: FormGroup;
  constructor(structure: FormGroup) {
    this.structure = structure;
  }
}
