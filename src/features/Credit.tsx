import { useState } from 'react';
import { Select, Table } from 'antd';
import { Area } from '@ant-design/plots';

type Props = {};
export const Credit = (props: Props) => {
  const [repaymentSchedule, setRepaymentSchedule] = useState<
    { luna: number; rataLunara: number; soldDatorat: number }[]
  >([]);
  const [selectedPeriod, setSelectedPeriod] = useState(6);
  // function calculRataLunara(sumaImprumutata: any, rataDobanzii: any, perioadaRambursare: any) {
  //   // Convertește rata dobânzii din procent în valoare zecimală
  //   const rataZecimala = rataDobanzii / 100 / 12;
  //
  //   // Calculează numărul total de plăți lunare
  //   const numarTotalPlati = perioadaRambursare * 12;
  //
  //   // Calculează rata lunară folosind formula anuității
  //   const rataLunara =
  //     (sumaImprumutata * rataZecimala) / (1 - Math.pow(1 + rataZecimala, -numarTotalPlati));
  //
  //   return rataLunara;
  // }

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

    const programPlati = Array.from({ length: perioadaRambursare * 12 }, (_, index) => {
      const soldDatorat =
        sumaImprumutata * Math.pow(1 + rataDobanzii / 100 / 12, index + 1) -
        rataLunara *
          ((Math.pow(1 + rataDobanzii / 100 / 12, index + 1) - 1) / (rataDobanzii / 100 / 12));

      return {
        luna: index + 1,
        rataLunara,
        soldDatorat,
      };
    });

    return programPlati;
  }

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

  const sumaImprumutata = 10000;
  const rataDobanzii = 5;

  const handlePeriodChange = (value: number) => {
    setSelectedPeriod(value);
    const schedule = calculareProgramPlati(sumaImprumutata, rataDobanzii, value);
    setRepaymentSchedule(schedule);
  };

  console.log(`Rata lunară: ${selectedPeriod}`, `Date tabel: ${repaymentSchedule}`);

  // const ifFunction = (condition, valueIfTrue, valueIfFalse) => {
  //   return condition ? valueIfTrue : valueIfFalse;
  // };
  //
  // const A13 = "Da"; // condiția
  // const E12 = 1000; // valoarea dacă condiția este adevărată
  // const C4 = 120; // valoarea dacă condiția este falsă
  //
  // const result = ifFunction(A13 !== "", E12 * (C4 / 12), "");
  // console.log(`Rezultatul este: ${result}`);

  const data = [{}];
  const config = {
    data,
    // xField: 'timePeriod',
    // yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };
  return (
    <div>
      <h1>Предложения по кредитам</h1>
      <p>Ферма предлагает своим работникам следующие предложения по кредитам:</p>
      <ul>
        <li>Кредит на покупку жилья в размере до 100 000 леев под 10% годовых.</li>
        <li>Кредит на покупку автомобиля в размере до 50 000 леев под 12% годовых.</li>
        <li>Кредит на образование в размере до 20 000 леев под 15% годовых.</li>
      </ul>
      <p>Кредиты предоставляются на срок от 1 года до 5 лет.</p>

      <h3>Сравнение с конкурентами</h3>
      <p>
        Ферма предлагает своим работникам более выгодные условия по кредитам, чем ее конкуренты.
        Так, например, конкурентная ферма предлагает кредиты на покупку жилья под 12% годовых, а на
        покупку автомобиля под 14% годовых.
      </p>
      <Select options={periodList} style={{ width: 200 }} onChange={handlePeriodChange} />

      <p>{selectedPeriod}</p>
      <Table dataSource={repaymentSchedule} columns={columns} pagination={false} />

      {/*<Area {...config} />*/}
    </div>
  );
};
