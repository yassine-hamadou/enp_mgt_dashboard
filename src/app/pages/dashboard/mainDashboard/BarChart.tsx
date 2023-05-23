import {Badge, Space, Table} from 'antd'
import type {ColumnsType} from 'antd/es/table'
import {KTCard, KTCardBody} from '../../../../_metronic/helpers'

interface DataType {
  tenant: string
  finance: string
  supplychain: string
  esms: string
  production: string
  payroll: string
}

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const columns: ColumnsType<DataType> = [
  {
    title: 'Company',
    dataIndex: 'tenant',
    rowScope: 'row',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Finance',
    dataIndex: 'finance',
    render: (text) => {
      if (text === 'No data') {
        return (
          <a>
            <Space>
              <Badge status='success' />
              {text}
            </Space>
          </a>
        )
      }
      return (
        <a>
          <Space>
            <Badge status='warning' />
            {text}
          </Space>
        </a>
      )
    },
  },
  {
    title: 'Supply-Chain',
    dataIndex: 'supplychain',
    render: (text) => {
      if (text === 'No data') {
        return (
          <a>
            <Space>
              <Badge status='error' />
              {text}
            </Space>
          </a>
        )
      }
      return (
        <a>
          <Space>
            <Badge status='warning' />
            {text}
          </Space>
        </a>
      )
    },
  },
  {
    title: 'ESMS',
    dataIndex: 'esms',
    render: (text) => {
      if (text === 'No data') {
        return (
          <a>
            <Space>
              <Badge status='error' />
              {text}
            </Space>
          </a>
        )
      }
      return (
        <a>
          <Space>
            <Badge status='success' />
            {text}
          </Space>
        </a>
      )
    },
  },
  {
    title: 'Production',
    dataIndex: 'production',
    render: (text) => {
      if (text === 'No data') {
        return (
          <a>
            <Space>
              <Badge status='error' />
              {text}
            </Space>
          </a>
        )
      }
      return (
        <a>
          <Space>
            <Badge status='processing' color={'#faad14'} />
            {text}
          </Space>
        </a>
      )
    },
  },
  {
    title: 'HR',
    dataIndex: 'hr',
    render: (text) => {
      if (text === 'No data') {
        return (
          <a>
            <Space>
              <Badge status='error' />
              {text}
            </Space>
          </a>
        )
      }
      return (
        <a>
          <Space>
            <Badge status='processing' color={'#00FF00'} />
            {text}
          </Space>
        </a>
      )
    },
  },
  {
    title: 'Payroll',
    dataIndex: 'payroll',
    render: (text) => {
      if (text === 'No data') {
        return (
          <a>
            <Space>
              <Badge status='error' />
              {text}
            </Space>
          </a>
        )
      }
      return (
        <a>
          <Space>
            <Badge status='success' />
            {text}
          </Space>
        </a>
      )
    },
  },
]

const data: any = [
  {
    tenant: 'Tarkwa',
    finance: '18-05-2023',
    supplychain: 'No data',
    esms: '18-05-2023',
    production: '10-05-2023',
    hr: '19-05-2023',
    payroll: '18-05-2023',
  },
  {
    tenant: 'Damang',
    finance: '18-05-2023',
    supplychain: 'No data',
    esms: '18-05-2023',
    production: '10-05-2023',
    hr: '19-05-2023',
    payroll: 'No data',
  },
  {
    tenant: 'Salaga',
    finance: '18-05-2023',
    supplychain: 'No data',
    esms: 'No data',
    production: 'No data',
    hr: 'No data',
    payroll: 'No data',
  },
  {
    tenant: 'Headoffice',
    finance: '18-05-2023',
    supplychain: 'No data',
    esms: '18-05-2023',
    production: 'No data',
    hr: '19-05-2023',
    payroll: 'No data',
  },
  {
    tenant: 'Cardinal',
    finance: '18-05-2023',
    supplychain: 'No data',
    esms: 'No data',
    production: 'No data',
    hr: 'No data',
    payroll: 'No data',
  },
]

const MainDashboard = () => {
  return (
    <KTCard>
      <KTCardBody>
        <Table columns={columns} dataSource={data} bordered />
      </KTCardBody>
    </KTCard>
  )
}

export default MainDashboard
