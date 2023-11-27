import { Row, Col, Table } from 'antd';
import { eveningData, farmData } from 'data';

export const Farm = () => {
  const columnsFarm = [
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Количество',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  const columns = [
    {
      title: 'Тип МЁда',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Сорт',
      dataIndex: 'variety',
      key: 'variety',
    },
    {
      title: 'Производство',
      dataIndex: 'production',
      key: 'production',
    },
    {
      title: 'Килограммов',
      dataIndex: 'number_kilograms',
      key: 'number_kilograms',
    },
    {
      title: 'Литров',
      dataIndex: 'number_liters',
      render: (number_liters: string) => parseInt(number_liters, 10),
      key: 'number_liters',
    },
    {
      title: 'Банок',
      dataIndex: 'number_of_cans',
      render: (number_of_cans: string) => parseInt(number_of_cans, 10),
      key: 'number_of_cans',
    },
  ];

  return (
    <div>
      <h1>Производство мёда</h1>
      <p>
        Производство мёда на небольшой ферме начинается с подготовки ступ. В ступы помещаются рамки
        с воском, на которых пчелы будут собирать мёд. После того, как ступы заполнены, пчелы
        начинают собирать мёд. Они приносят его в ульи, где он хранится до сбора. Сбор мёда
        производится медведями. Медведи входят в ульи и вынимают рамки с мёдом. Затем они переносят
        рамки в центр фермы, где мёд откачивают. После откачки мёд разливают по банкам и отправляют
        на продажу.
      </p>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <p>
            В приведенном ниже примере показано кол-тво инвентаря и кол-тво времени для производства
            одной партии мёда.
          </p>
          <Table dataSource={farmData} columns={columnsFarm} pagination={false} />
        </Col>
        <Col span={12}>
          <p>Плотность мёда составляет около 1,42 кг/л.</p>
          <p>
            формула для подчета : <span>количество_литров = количество_килограмм / плотность</span>
          </p>
          <p>
            Как вы можете видеть, количество литров и количество банок показаны ниже в зависимости
            от количества килограммов мёда.
          </p>
          <Table dataSource={eveningData} columns={columns} pagination={false} />
        </Col>
      </Row>
    </div>
  );
};
