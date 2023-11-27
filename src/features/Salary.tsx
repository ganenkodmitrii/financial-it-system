import * as React from 'react';
import { Row, Col, Table } from 'antd';
import { salaryData } from '../data';
import { Deduction, Overtime } from 'types';

type Props = {};
export const Salary = (props: Props) => {
  const columns = [
    {
      title: 'должность',
      dataIndex: 'job_title',
      key: 'job_title',
    },
    {
      title: 'оклад',
      dataIndex: 'salary',
      key: 'salary',
    },
    {
      title: 'надбавки',
      dataIndex: 'overtime',
      key: 'overtime',
      render: (overtime: Overtime) => {
        return Object.entries(overtime).map(([key, { name, value }]) => {
          return <div>{`${name} : ${value}`}</div>;
        });
      },
    },
    {
      title: 'вычеты',
      dataIndex: 'deductions',
      key: 'deductions',
      render: (deductions: Deduction) => {
        return Object.entries(deductions).map(([key, { name, value }]) => {
          return <div>{`${name} : ${value}`}</div>;
        });
      },
    },
    {
      title: 'почасовая оплата',
      dataIndex: 'hour_salary',
      key: 'hour_salary',
      render: (hour_salary: number) => hour_salary.toFixed(2),
    },
    {
      title: 'итоговая оплата',
      dataIndex: 'total',
      key: 'total',
    },
  ];

  return (
    <div>
      <h1>Расчёт заработной платы</h1>
      <p>Заработная плата работников фермы рассчитывается исходя из их должности и квалификации.</p>
      <Row>
        <Col span={24}>
          <p>Лиса-бухгалтер: оклад бухгалтера составляет 1000 леев в месяц.</p>
          <p>Волк-директор: оклад бухгалтера составляет 2000 леев в месяц.</p>
          <p>Mедведь-сборщик: оклад бухгалтера составляет 3000 леев в месяц.(300 лей за ступу)</p>
          <p>Mедведь-пасечник: оклад бухгалтера составляет 3000 леев в месяц.(300 лей за ступу)</p>
        </Col>
        <Col span={24}>
          <Table dataSource={salaryData} columns={columns} pagination={false} />
        </Col>
      </Row>
    </div>
  );
};
