import { CalculationModel } from '../models/calculation.model';

export const EmptyBudgetCalculation: CalculationModel = {
  data: {
    name: '',
    people: 0,
    type: 'romantic',
    destination: 'italy',
    transportation: 'flight',
    lodge: 'hotel',
    season: 'may',
    duration: 0,
    budget: {
      total: 0,
      transportation: {
        expenses: [],
        total: 0,
      },
      food: { expenses: [], total: 0 },
      lodge: { expenses: [], total: 0 },
      activities: {
        expenses: [],
        total: 0,
      },
    },
    child: 0,
  },
};
