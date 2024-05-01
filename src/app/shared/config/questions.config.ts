import { QuestionModel } from '../models/question.model';

export const questions: QuestionModel[] = [
  new QuestionModel({
    step: 0,
    question: 'Which kind of trip do you want?',
    answer: 'family',
    required: true,
    nextStep: 0.1,
  }),
  new QuestionModel({
    step: 0.1,
    question: 'Pick up your destination',
    answer: 'spain',
    required: true,
    nextStep: 1,
  }),
  new QuestionModel({
    step: 1,
    question: 'How many people would it be in that trip?',
    answer: 0,
    required: true,
    nextStep: 2,
  }),
  new QuestionModel({
    step: 2,
    question: 'How many under-age or kids would enjoy the trip?',
    answer: 0,
    required: true,
    nextStep: 3,
  }),
  new QuestionModel({
    step: 3,
    question: 'How would you prefer to travel around your destination?',
    answer: 'flight',
    required: true,
    nextStep: 3.1,
  }),
  new QuestionModel({
    step: 3.1,
    question:
      'In case you were visiting a city, how would you move around there?',
    answer: 'vtc',
    required: true,
    nextStep: 3.2,
  }),
  new QuestionModel({
    step: 4,
    question:
      'Do you prefere to be hosted in an hotel, hostel or AirBnB?',
    answer: 'airbnb',
    required: true,
    nextStep: 4.1,
  }),
  new QuestionModel({
    step: 4.1,
    question:
    'Which kind of hotel do yo prefer?',
    answer: 'high',
    required: true,
    nextStep: 4.3,
  }),
  new QuestionModel({
    step: 4.2,
    question:
    'In case you are on Airbnb, do you prefer to buy groceries and prepare your meals or go to dinne in?',
    answer: true,
    required: true,
    nextStep: 4.3,
  }),
  new QuestionModel({
    step: 4.3,
    question:
    'Are you picky with the food?',
    answer: true,
    required: true,
    nextStep: 5,
  }),
  new QuestionModel({
    step: 5,
    question:
    'Do you prefer city or nature?',
    answer: true,
    required: true,
    nextStep: 6,
  }),
  new QuestionModel({
    step: 6,
    question:
    'Do you enjoy visiting museums and exibitions?',
    answer: true,
    required: true,
    nextStep: 6.1,
  }),
  new QuestionModel({
    step: 6.1,
    question:
    'Do you enjoy going to shows as musicals or drama?',
    answer: true,
    required: true,
    nextStep: 7,
  }),
  new QuestionModel({
    step: 7,
    question:
    'How much time would you spend on your trip?',
    answer: 1,
    required: true,
    nextStep: 8,
  }),
  new QuestionModel({
    step: 8,
    question:
    'When would you begin your trip?',
    answer: new Date(),
    required: true,
    nextStep: 9,
  }),
  new QuestionModel({
    step: 9,
    question:
    'When would you ended up?',
    answer: new Date(),
    required: true,
    nextStep: 10,
  });
  new QuestionModel({
    step: 10,
    question:
    'From which country would you come in?',
    answer: new Date(),
    required: true,
    nextStep: null,
  })
];
