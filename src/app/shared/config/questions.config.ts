import { FormControl } from '@angular/forms';
import { QuestionModel } from '../models/question.model';
import {
  BundleOptions,
  CityTransportationOptions,
  DestinationOptions,
  IntensityOptions,
  LodgeOptions,
  OriginOptions,
  TransportationOptions,
  YesOrNoOptions,
} from './answer-options.config';

export const questions: QuestionModel[] = [
  new QuestionModel({
    step: 0,
    question: 'question1',
    answer: new FormControl(),
    required: true,
    nextStep: 1,
    information: '',
    errorMessage: 'questions.question1_error',
    options: BundleOptions,
  }),
  new QuestionModel({
    step: 1,
    question: 'question2',
    answer: new FormControl(),
    required: true,
    nextStep: 2,
    information: '',
    options: DestinationOptions,
    errorMessage: 'questions.question2_error',
  }),
  new QuestionModel({
    step: 2,
    question: 'question3',
    answer: new FormControl(null),
    required: true,
    nextStep: 3,
    information: '',
    errorMessage: 'questions.question3_error',
  }),
  new QuestionModel({
    step: 3,
    question: 'question4',
    answer: new FormControl(null),
    required: false,
    nextStep: 4,
    information: '',
    errorMessage: 'questions.question4_error',
  }),
  new QuestionModel({
    step: 4,
    question: 'question5',
    answer: new FormControl('flight'),
    required: true,
    nextStep: 5,
    information: '',
    errorMessage: 'questions.question5_error',

    options: TransportationOptions,
  }),
  new QuestionModel({
    step: 5,
    question: 'question6',
    answer: new FormControl('vtc'),
    required: true,
    nextStep: 6,
    information: '',
    errorMessage: 'questions.question6_error',

    options: CityTransportationOptions,
  }),
  new QuestionModel({
    step: 6,
    question: 'question7',
    answer: new FormControl('airbnb'),
    required: true,
    nextStep: 7,
    information: '',
    errorMessage: 'questions.question7_error',

    options: LodgeOptions,
  }),
  new QuestionModel({
    step: 7,
    question: 'question8',
    answer: new FormControl('high'),
    required: true,
    nextStep: 9,
    information: '',
    errorMessage: 'questions.question8_error',

    options: IntensityOptions,
  }),
  new QuestionModel({
    step: 8,
    question: 'question9',
    answer: new FormControl(true),
    required: true,
    nextStep: 9,
    information: '',
    errorMessage: 'questions.question9_error',

    options: YesOrNoOptions,
  }),
  new QuestionModel({
    step: 9,
    question: 'question10',
    answer: new FormControl(true),
    required: true,
    nextStep: 10,
    information: '',
    errorMessage: 'questions.question10_error',

    options: YesOrNoOptions,
  }),
  new QuestionModel({
    step: 10,
    question: 'question11',
    answer: new FormControl(true),
    required: true,
    nextStep: 11,
    information: '',
    errorMessage: 'questions.question11_error',

    options: YesOrNoOptions,
  }),
  new QuestionModel({
    step: 11,
    question: 'question12',
    answer: new FormControl(true),
    required: true,
    nextStep: 12,
    information: '',
    errorMessage: 'questions.question12_error',

    options: YesOrNoOptions,
  }),
  new QuestionModel({
    step: 12,
    question: 'question13',
    answer: new FormControl(true),
    required: true,
    nextStep: 13,
    information: '',
    errorMessage: 'questions.question13_error',

    options: YesOrNoOptions,
  }),
  new QuestionModel({
    step: 13,
    question: 'question14',
    answer: new FormControl(),
    required: true,
    nextStep: 14,
    information: '',
    errorMessage: 'questions.question14_error',
  }),
  new QuestionModel({
    step: 14,
    question: 'question15',
    answer: new FormControl(new Date()),
    required: true,
    nextStep: 15,
    information: '',
    errorMessage: 'questions.question15_error',
  }),
  new QuestionModel({
    step: 15,
    question: 'question16',
    answer: new FormControl('usa'),
    required: true,
    nextStep: null,
    information: '',
    errorMessage: 'questions.question16_error',

    options: OriginOptions,
  }),
];
