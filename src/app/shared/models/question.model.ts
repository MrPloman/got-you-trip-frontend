import {
  BundlesTypes,
  CityTransportation,
  DestinationsTypes,
  IntensityTypes,
  LodgeTypes,
  OriginTypes,
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
    | OriginTypes
    | LodgeTypes
    | IntensityTypes
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
      | OriginTypes
      | LodgeTypes
      | IntensityTypes
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