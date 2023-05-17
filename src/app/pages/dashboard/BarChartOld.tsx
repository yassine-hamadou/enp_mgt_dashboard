import {Bar} from '@ant-design/plots'

const BarChart = () => {
  const data = [
    {
      type: 'DT106',
      sales: 38,
    },
    {
      type: 'DT107',
      sales: 52,
    },
    {
      type: 'DT108',
      sales: 61,
    },
    {
      type: 'DT109',
      sales: 145,
    },
    {
      type: 'DT112',
      sales: 48,
    },
    {
      type: 'EDT101',
      sales: 38,
    },
    {
      type: 'EDT102',
      sales: 38,
    },
    {
      type: 'EDT103',
      sales: 38,
    },
  ]
  const config = {
    data,
    xField: 'sales',
    yField: 'type',
    legend: {
      position: 'top-left',
    },
    seriesField: 'sales',
    barWidthRatio: 0.8,
    meta: {
      type: {
        alias: 'Type',
      },
      sales: {
        alias: 'Volume',
      },
    },
  }
  // @ts-ignore
  return <Bar {...config} />
}

export {BarChart}
