import { FormControl } from '@angular/forms';
import {
  BundlesTypes,
  CityTransportation,
  DestinationsTypes,
  IntensityTypes,
  LodgeTypes,
  OriginTypes,
  TransportationTypes,
} from '../types/budget.types';
import { AnswerOption } from './answer-options.model';

export class QuestionModel {
  public step: number;
  public question: string;
  public answer: FormControl<
    | TransportationTypes
    | CityTransportation
    | DestinationsTypes
    | BundlesTypes
    | number
    | boolean
    | Date
    | OriginTypes
    | LodgeTypes
    | IntensityTypes
    | null
    | string
  >;
  public required: boolean;
  public nextStep: number | null;
  public information: string;
  public errorMessage: string;
  public options?: AnswerOption[];
  constructor(structure: {
    step: number;
    question: string;
    answer: FormControl<
      | TransportationTypes
      | CityTransportation
      | DestinationsTypes
      | BundlesTypes
      | number
      | boolean
      | Date
      | OriginTypes
      | LodgeTypes
      | IntensityTypes
      | null
      | string
    >;
    required: boolean;
    nextStep: number | null;
    information: string;
    errorMessage: string;
    options?: AnswerOption[];
  }) {
    this.step = structure.step;
    this.question = structure.question;
    this.answer = structure.answer;
    this.required = structure.required;
    this.nextStep = structure.nextStep;
    this.information = structure.information;
    this.errorMessage = structure.errorMessage;
    this.options = structure.options;
  }
}
