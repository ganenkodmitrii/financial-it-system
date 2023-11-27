import { Employee } from 'types';

export const salaryData: Employee[] = [
  {
    job_title: 'лиса-бухгалтер',
    salary: 1000,
    overtime: [
      {
        name: 'выслуга лет',
        value: 0.1 * 1000,
        condition: 'более 5 лет работы',
      },
      {
        name: 'сложность работы',
        value: 0.2 * 1000,
        condition: 'ответственность за ведение бухгалтерского учета',
      },
      {
        name: 'специальные условия труда',
        value: 0.3 * 1000,
        condition: 'работа на удаленке',
      },
    ],
    deductions: [
      {
        name: 'подоходный налог',
        value: 0.18 * 1600,
      },
      {
        name: 'социальные отчисления',
        value: 0.22 * 1600,
      },
    ],
    hour_salary: 1600 / 176,
    total: 960,
  },
  {
    job_title: 'волк-директор',
    salary: 2000,
    overtime: [
      {
        name: 'сложность работы',
        value: 0.2 * 2000,
        condition: 'ответственность за управление фермой',
      },
    ],
    deductions: [
      {
        name: 'подоходный налог',
        value: 0.18 * 2400,
      },
      {
        name: 'социальные отчисления',
        value: 0.22 * 2400,
      },
    ],
    hour_salary: 2400 / 176,
    total: 1435,
  },
  {
    job_title: 'медведь-пасечник',
    salary: 3000,
    overtime: [
      {
        name: 'сложность работы',
        value: 0.1 * 3000,
        condition: 'ответственность за уход за пчелами',
      },
    ],
    deductions: [
      {
        name: 'подоходный налог',
        value: 0.18 * 3300,
      },
      {
        name: 'социальные отчисления',
        value: 0.22 * 3300,
      },
    ],
    hour_salary: 3300 / 176,
    total: 1980,
  },
  {
    job_title: 'медведь-сборщик',
    salary: 3000,
    overtime: [
      {
        name: 'сложность работы',
        value: 0.1 * 3000,
        condition: 'ответственность за уход за пчелами',
      },
    ],
    deductions: [
      {
        name: 'подоходный налог',
        value: 0.18 * 3300,
      },
      {
        name: 'социальные отчисления',
        value: 0.22 * 3300,
      },
    ],
    hour_salary: 3300 / 176,
    total: 1980,
  },
];
