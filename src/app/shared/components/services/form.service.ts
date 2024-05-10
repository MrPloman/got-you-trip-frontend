import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  public isInputText(label: string): boolean {
    if (
      label === 'title' ||
      label === 'address' ||
      label === 'floor' ||
      label === 'door' ||
      label === 'block' ||
      label === 'gate' ||
      label === 'city'
    )
      return true;
    else return false;
  }
  public isInputTextarea(label: string): boolean {
    if (label === 'description') return true;
    else return false;
  }
  public isInputNumber(label: string): boolean {
    if (
      label === 'question3' ||
      label === 'question4' ||
      label === 'question14'
    )
      return true;
    else return false;
  }
  public isInputCheckbox(label: string): boolean {
    if (true) return true;
    else return false;
  }
  public isInputSelector(label: string): boolean {
    if (
      label === 'question1' ||
      label === 'question2' ||
      label === 'question5' ||
      label === 'question6' ||
      label === 'question7' ||
      label === 'question8' ||
      label === 'question9' ||
      label === 'question10' ||
      label === 'question11' ||
      label === 'question12' ||
      label === 'question13' ||
      label === 'question16'
    )
      return true;
    else return false;
  }
  public isInputRequired(label: string): boolean {
    if (
      label === 'title' ||
      label === 'description' ||
      label === 'street' ||
      label === 'country' ||
      label === 'number' ||
      label === 'address' ||
      label === 'city' ||
      label === 'zip' ||
      label === 'date' ||
      label === 'value'
    )
      return true;
    else return false;
  }
  public isInputDate(label: string): boolean {
    if (label === 'question15') return true;
    else return false;
  }
}
