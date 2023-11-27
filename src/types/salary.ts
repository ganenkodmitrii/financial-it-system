export interface Overtime {
  name: string;
  value: number;
  condition: string;
}

export interface Deduction {
  name: string;
  value: number;
}

export interface Employee {
  job_title: string;
  salary: number;
  overtime?: Overtime[];
  deductions?: Deduction[];
  hour_salary?: number;
  total?: number;
}
