import { useState } from 'react';
import { Select, Row, Col, Table, InputNumber, Button } from 'antd';
import { Line } from '@ant-design/charts';
import { Column } from '@ant-design/plots';

export const Credit = () => {
  const [amount, setAmount] = useState<string>('');
  const [term, setTerm] = useState<number>(1);

  const [paymentMonthly, setPaymentMonthly] = useState<
    {
      month: number;
      sold_credit: number;
      interest_rate: number;
      monthly_rate: number;
      commission: number;
      monthly_payment: number;
    }[]
  >();

  const periodList = [
    { label: '1 год', value: 1 },
    { label: '2 года', value: 2 },
    { label: '3 года', value: 3 },
    { label: '4 года', value: 4 },
    { label: '6 лет', value: 6 },
  ];

  const columns = [
    {
      title: 'Месяц',
      dataIndex: 'month',
      key: 'month',
    },
    {
      title: 'Кредит',
      dataIndex: 'sold_credit',
      key: 'sold_credit',
    },
    {
      title: 'Процентная ставка',
      dataIndex: 'interest_rate',
      key: 'interest_rate',
    },
    {
      title: 'Ежемесячная ставка',
      dataIndex: 'monthly_rate',
      key: 'monthly_rate',
    },
    {
      title: 'Комиссия',
      dataIndex: 'commission',
      key: 'commission',
    },
    {
      title: 'Ежемесячно оплата',
      dataIndex: 'monthly_payment',
      key: 'monthly_payment',
    },
  ];

  function getCreditPayment(amount?: string, term?: number) {
    const interestRate = 0.1;
    let amountNumber = Number(amount);
    const termNumber = Number(term) * 12;
    // Проверяем, является ли сумма кредита пустой.
    if (amount === '') {
      return;
    }

    if (!term) {
      return;
    }

    // Рассчитываем ежемесячный платеж по формуле.
    const monthlyPayment = (amountNumber * interestRate) / (12 * (1 - (1 + interestRate) ** -term));

    // Возвращаем массив графика выплат.

    const paymentSchedule = [];

    // Проходим по каждому месяцу срока кредита.
    for (let i = 1; i <= termNumber; i++) {
      // Рассчитываем сумму процентов за текущий месяц.
      const interest = (amountNumber * interestRate) / 12;

      // Рассчитываем размер ежемесячного платежа.
      const monthlyPaymentAmount = monthlyPayment - interest;

      // Добавляем данные о текущем месяце в массив графика выплат.
      paymentSchedule.push({
        month: i,
        sold_credit: Number(amountNumber.toFixed(2)),
        interest_rate: Number(interest.toFixed(2)),
        monthly_rate: Number(monthlyPaymentAmount.toFixed(2)),
        commission: 0,
        monthly_payment: Number(monthlyPayment.toFixed(2)),
      });

      // Уменьшаем сумму кредита на размер ежемесячного платежа.
      amountNumber = amountNumber - monthlyPaymentAmount;
    }

    return paymentSchedule;
  }

  const handlePeriodChange = () => {
    const paymentSchedule = getCreditPayment(amount, term);

    setPaymentMonthly(paymentSchedule);
  };

  const config = {
    data: paymentMonthly,
    // padding: 'auto',
    xField: 'month',
    yField: 'interest_rate',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
    smooth: true,
  };

  return (
    <div>
      <h1>Предложения по кредитам</h1>
      <p>Ферма предлагает своим работникам следующи кредит:</p>

      <p>Кредит на любые нужды в размере от 10 000 до 200 000 леев под 10% годовых.</p>
      <p>Кредиты предоставляются на срок от 1 года до 6 лет.</p>

      <Row gutter={[16, 16]}>
        <Col span={3}>
          <InputNumber
            style={{ width: '100%' }}
            placeholder="минимум = 10000, максимум = 200000"
            value={amount}
            type="number"
            min={'10000'}
            max={'200000'}
            onChange={(value) => {
              console.log(value);
              return value && setAmount(value);
            }}
          />
        </Col>
        <Col span={3}>
          <Select
            style={{ width: '100%' }}
            options={periodList}
            value={term}
            onChange={(period) => setTerm(period)}
          />
        </Col>
        <Col span={3}>
          <Button onClick={handlePeriodChange}>вычислить</Button>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        {paymentMonthly ? (
          <Col span={12}>
            <Column {...config} />
          </Col>
        ) : null}
        {paymentMonthly ? (
          <Col span={12}>
            <Line {...config} />
          </Col>
        ) : null}
        <Col span={24}>
          <Table dataSource={paymentMonthly} columns={columns} pagination={false} />
        </Col>
      </Row>

      <h3>Сравнение с конкурентами</h3>
      <p>
        Ферма предлагает своим работникам более выгодные условия по кредитам, чем ее конкуренты.
        Так, например, конкурентная ферма предлагает кредиты на под 12% годовых.
      </p>
    </div>
  );
};
