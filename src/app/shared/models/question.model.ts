import {
  BundlesTypes,
  CityTransportation,
  DestinationsTypes,
  TransportationTypes,
} from '../types/budget.types';

export class QuestionModel {
  public step: number;
  public question: string;
  public answer:
    | TransportationTypes
    | CityTransportation
    | DestinationsTypes
    | BundlesTypes
    | number
    | boolean
    | Date
    | undefined;
  public required: boolean;
  public nextStep: number | null;
  constructor(structure: {
    step: number;
    question: string;
    answer:
      | TransportationTypes
      | CityTransportation
      | DestinationsTypes
      | BundlesTypes
      | number
      | boolean
      | Date;
    required: boolean;
    nextStep: number | null;
  }) {
    this.step = structure.step;
    this.question = structure.question;
    this.answer = structure.answer;
    this.required = structure.required;
    this.nextStep = structure.nextStep;
  }
}
