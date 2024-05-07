import { FormControl } from '@angular/forms';
import { QuestionModel } from '../models/question.model';

export const questions: QuestionModel[] = [
  new QuestionModel({
    step: 0,
    question: 'question1',
    answer: new FormControl(''),
    required: true,
    nextStep: 0.1,
    information: '',
    options: [
      { label: 'family', value: 'family', disabled: false },
      { label: 'romantic', value: 'romantic', disabled: false },
      { label: 'friends', value: 'friends', disabled: false },
    ],
  }),
  new QuestionModel({
    step: 0.1,
    question: 'question2',
    answer: new FormControl('spain'),
    required: true,
    nextStep: 1,
    information: '',

    options: [
      { label: 'spain', value: 'spain', disabled: false },
      { label: 'romantic', value: 'romantic', disabled: false },
      { label: 'friends', value: 'friends', disabled: false },
    ],
  }),
  new QuestionModel({
    step: 1,
    question: 'question3',
    answer: new FormControl(0),
    required: true,
    nextStep: 2,
    information: '',
  }),
  new QuestionModel({
    step: 2,
    question: 'question4',
    answer: new FormControl(0),
    required: true,
    nextStep: 3,
    information: '',
  }),
  new QuestionModel({
    step: 3,
    question: 'question5',
    answer: new FormControl('flight'),
    required: true,
    nextStep: 3.1,
    information: '',

    options: [
      { label: 'flight', value: 'flight', disabled: false },
      { label: 'romantic', value: 'romantic', disabled: false },
      { label: 'friends', value: 'friends', disabled: false },
    ],
  }),
  new QuestionModel({
    step: 3.1,
    question: 'question6',
    answer: new FormControl('vtc'),
    required: true,
    nextStep: 3.2,
    information: '',

    options: [
      { label: 'vtc', value: 'vtc', disabled: false },
      { label: 'romantic', value: 'romantic', disabled: false },
      { label: 'friends', value: 'friends', disabled: false },
    ],
  }),
  new QuestionModel({
    step: 4,
    question: 'question7',
    answer: new FormControl('airbnb'),
    required: true,
    nextStep: 4.1,
    information: '',

    options: [
      { label: 'airbnb', value: 'airbnb', disabled: false },
      { label: 'romantic', value: 'romantic', disabled: false },
      { label: 'friends', value: 'friends', disabled: false },
    ],
  }),
  new QuestionModel({
    step: 4.1,
    question: 'question8',
    answer: new FormControl('high'),
    required: true,
    nextStep: 4.3,
    information: '',

    options: [
      { label: 'high', value: 'high', disabled: false },
      { label: 'medium', value: 'medium', disabled: false },
      { label: 'low', value: 'low', disabled: false },
    ],
  }),
  new QuestionModel({
    step: 4.2,
    question: 'question9',
    answer: new FormControl(true),
    required: true,
    nextStep: 4.3,
    information: '',

    options: [
      { label: 'yes', value: true, disabled: false },
      { label: 'romantic', value: 'romantic', disabled: false },
      { label: 'friends', value: 'friends', disabled: false },
    ],
  }),
  new QuestionModel({
    step: 4.3,
    question: 'question10',
    answer: new FormControl(true),
    required: true,
    nextStep: 5,
    information: '',

    options: [
      { label: 'yes', value: true, disabled: false },
      { label: 'romantic', value: 'romantic', disabled: false },
      { label: 'friends', value: 'friends', disabled: false },
    ],
  }),
  new QuestionModel({
    step: 5,
    question: 'question11',
    answer: new FormControl(true),
    required: true,
    nextStep: 6,
    information: '',

    options: [
      { label: 'yes', value: true, disabled: false },
      { label: 'romantic', value: 'romantic', disabled: false },
      { label: 'friends', value: 'friends', disabled: false },
    ],
  }),
  new QuestionModel({
    step: 6,
    question: 'question12',
    answer: new FormControl(true),
    required: true,
    nextStep: 6.1,
    information: '',

    options: [
      { label: 'yes', value: true, disabled: false },
      { label: 'romantic', value: 'romantic', disabled: false },
      { label: 'friends', value: 'friends', disabled: false },
    ],
  }),
  new QuestionModel({
    step: 6.1,
    question: 'question13',
    answer: new FormControl(true),
    required: true,
    nextStep: 7,
    information: '',

    options: [
      { label: 'yes', value: true, disabled: false },
      { label: 'romantic', value: 'romantic', disabled: false },
      { label: 'friends', value: 'friends', disabled: false },
    ],
  }),
  new QuestionModel({
    step: 7,
    question: 'question14',
    answer: new FormControl(1),
    required: true,
    nextStep: 8,
    information: '',
  }),
  new QuestionModel({
    step: 8,
    question: 'question15',
    answer: new FormControl(new Date()),
    required: true,
    nextStep: 9,
    information: '',
  }),
  new QuestionModel({
    step: 9,
    question: 'question16',
    answer: new FormControl(new Date()),
    required: true,
    nextStep: 10,
    information: '',
  }),
  new QuestionModel({
    step: 10,
    question: 'question17',
    answer: new FormControl('usa'),
    required: true,
    nextStep: null,
    information: '',

    options: [
      { label: 'usa', value: 'usa', disabled: false },
      { label: 'romantic', value: 'romantic', disabled: false },
      { label: 'friends', value: 'friends', disabled: false },
    ],
  }),
];
