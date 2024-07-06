import {
  BundlesTypes,
  DestinationsTypes,
  LodgeTypes,
  MonthsTypes,
  TransportationTypes,
} from '../types/budget.types';

export class CalculationModel {
  data: {
    name: string;
    people: number;
    type: BundlesTypes;
    destination: DestinationsTypes;
    transportation: TransportationTypes;
    lodge: LodgeTypes;
    season: MonthsTypes;
    duration: number;
    budget: {
      total: number;
      transportation: {
        expenses: { name: string; value: number }[];
        total: number;
      };
      food: { expenses: { name: string; value: number }[]; total: number };
      lodge: { expenses: { name: string; value: number }[]; total: number };
      activities: {
        expenses: { name: string; value: number }[];
        total: number;
      };
    };
    child?: number;
  };

  constructor(data: {
    name: string;

    people: number;
    type: BundlesTypes;
    destination: DestinationsTypes;
    transportation: TransportationTypes;
    lodge: LodgeTypes;
    season: MonthsTypes;
    duration: number;
    budget: {
      total: number;
      transportation: {
        expenses: { name: string; value: number }[];
        total: number;
      };
      food: { expenses: { name: string; value: number }[]; total: number };
      lodge: { expenses: { name: string; value: number }[]; total: number };
      activities: {
        expenses: { name: string; value: number }[];
        total: number;
      };
    };
    child?: number;
  }) {
    this.data = data;
  }
}
