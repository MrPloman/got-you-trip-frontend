import {
  BundlesTypes,
  DestinationsTypes,
  TransportationTypes,
  CityTransportation,
  LodgeTypes,
  IntensityTypes,
  OriginTypes,
  FoodTypes,
  PlaceTypes,
  CurrencyType,
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
      | FoodTypes
      | PlaceTypes
      | CurrencyType
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
      | FoodTypes
      | PlaceTypes
      | CurrencyType
      | boolean;
    disabled: boolean;
  }) {
    this.structure = structure;
  }
}
