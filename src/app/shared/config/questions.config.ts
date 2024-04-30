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
];
