import {
  BundlesTypes,
  DestinationsTypes,
  TransportationTypes,
  CityTransportation,
  LodgeTypes,
  IntensityTypes,
  OriginTypes,
} from '../types/budget.types';

export class AnswerOption {
  public structure: {
    label: string;
    value:
      | BundlesTypes
      | DestinationsTypes
      | TransportationTypes
      | CityTransportation
      | LodgeTypes
      | IntensityTypes
      | OriginTypes
      | boolean;
    disabled: boolean;
  };

  constructor(structure: {
    label: string;
    value:
      | BundlesTypes
      | DestinationsTypes
      | TransportationTypes
      | CityTransportation
      | LodgeTypes
      | IntensityTypes
      | OriginTypes
      | boolean;
    disabled: boolean;
  }) {
    this.structure = structure;
  }
}
