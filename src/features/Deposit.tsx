import React, { useState } from 'react';
import { Select, Table } from 'antd';

type Props = {};
export const Deposit = (props: Props) => {
  const [repaymentSchedule, setRepaymentSchedule] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState(6);

  function calculRataLunara(
    sumaImprumutata: number,
    rataDobanzii: number,
    perioadaRambursare: number,
  ) {
    const rataZecimala = rataDobanzii / 100 / 12;
    const numarTotalPlati = perioadaRambursare * 12;

    return (sumaImprumutata * rataZecimala) / (1 - Math.pow(1 + rataZecimala, -numarTotalPlati));
  }

  function calculareProgramPlati(
    sumaImprumutata: number,
    rataDobanzii: number,
    perioadaRambursare: number,
  ) {
    const rataLunara = calculRataLunara(sumaImprumutata, rataDobanzii, perioadaRambursare);

    const programPlati: any = Array.from({ length: perioadaRambursare * 12 }, (_, index) => {
      if (index === 0) {
        return {
          luna: index + 1,
          rataLunara,
          soldDatorat: sumaImprumutata,
        };
      }

      const soldDatorat: any = programPlati[index - 1].soldDatorat - rataLunara;

      return {
        luna: index + 1,
        rataLunara,
        soldDatorat: soldDatorat > 0 ? soldDatorat : 0,
      };
    });

    return programPlati;
  }

  const handlePeriodChange = (value: number) => {
    setSelectedPeriod(value);
    const schedule = calculareProgramPlati(sumaImprumutata, rataDobanzii, value);
    setRepaymentSchedule(schedule);
  };

  const sumaImprumutata = 10000;
  const rataDobanzii = 5;
  const perioadaRambursare = 5;

  const periodList = [
    { label: '6 luni', value: 6 },
    { label: '12 luni', value: 12 },
    { label: '24 luni', value: 24 },
  ];

  const columns = [
    {
      title: 'Luna',
      dataIndex: 'luna',
      key: 'luna',
    },
    {
      title: 'Rata Lunara',
      dataIndex: 'rataLunara',
      key: 'rataLunara',
    },
    {
      title: 'Sold Datorat',
      dataIndex: 'soldDatorat',
      key: 'soldDatorat',
    },
  ];

  return (
    <div>
      <h1>Credit</h1>
      <Select options={periodList} style={{ width: 200 }} onChange={handlePeriodChange} />

      <Table dataSource={repaymentSchedule} columns={columns} pagination={false} />
    </div>
  );
};
