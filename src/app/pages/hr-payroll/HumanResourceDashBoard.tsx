import {PageTitle} from '../../../_metronic/layout/core'
import {useQuery} from 'react-query'
import {Table} from 'antd'
import {HRChart} from './HRChart'
import {fetchDashBoardData} from '../../../url'
import {TestChart} from './TestChart'

const columns: any = [
  {
    title: 'Paygroup',
    dataIndex: 'paygroupName',
    sorter: (a: any, b: any) => {
      if (a.paygroupName > b.paygroupName) {
        return 1
      }
      if (b.paygroupName > a.paygroupName) {
        return -1
      }
      return 0
    },
  },
  {
    title: 'Division',
    dataIndex: 'divisionName',
    sorter: (a: any, b: any) => {
      if (a.divisionName > b.divisionName) {
        return 1
      }
      if (b.divisionName > a.divisionName) {
        return -1
      }
      return 0
    },
  },
  {
    title: 'Department',
    dataIndex: 'departmentName',
    sorter: (a: any, b: any) => {
      if (a.departmentName > b.departmentName) {
        return 1
      }
      if (b.departmentName > a.departmentName) {
        return -1
      }
      return 0
    },
  },
  {
    title: 'Unit',
    dataIndex: 'unitName',
    sorter: (a: any, b: any) => {
      if (a.unitName > b.unitName) {
        return 1
      }
      if (b.unitName > a.unitName) {
        return -1
      }
      return 0
    },
  },
  {
    title: 'Number of Employees',
    dataIndex: 'employeeCount',
    sorter: (a: any, b: any) => {
      if (a.employeeCount > b.employeeCount) {
        return 1
      }
      if (b.employeeCount > a.employeeCount) {
        return -1
      }
      return 0
    },
  },
  {
    title: 'Male Count',
    dataIndex: 'countMale',
    sorter: (a: any, b: any) => {
      if (a.countMale > b.countMale) {
        return 1
      }
      if (b.countMale > a.countMale) {
        return -1
      }
      return 0
    },
  },
  {
    title: 'Female Count',
    dataIndex: 'countFemale',
    sorter: (a: any, b: any) => {
      if (a.countFemale > b.countFemale) {
        return 1
      }
      if (b.countFemale > a.countFemale) {
        return -1
      }
      return 0
    },
  },
]

const HRDashboardPage = () => {
  const {data: dashboardData} = useQuery('dashboarddata', fetchDashBoardData, {cacheTime: 5000})

  return (
    <div>
      {/* begin::Row */}
      <div className='row gy-5 g-xl-8 mb-7'>
        <div className='col-xxl-6'>
          <HRChart className='mb-xl-8' chartColor='primary' chartHeight='350px' />
        </div>
        <div className='col-xxl-6'>
          <TestChart className='mb-xl-8' chartColor='primary' chartHeight='350px' />
        </div>
        {/*<div className='col-12'>*/}
        {/*  <PayrollDashboardWrapper />*/}
        {/*</div>*/}
        <div
          className='col-12 row mt-7'
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px',
            margin: '5px',
            boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
          }}
        >
          {/* <Space style={{marginBottom: 16}}>
            <Input
              placeholder='Enter Search Text'
              // onChange={handleInputChange}
              type='text'
              allowClear
              // value={searchText}
            />
            <Button type='primary' >
            
              Search
            </Button>
          </Space> */}
          <Table columns={columns} dataSource={dashboardData?.data} />
        </div>
      </div>
    </div>
  )
}

const HRDashboardWrapper = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>{'HR-Payroll Dashboard'}</PageTitle>
      <HRDashboardPage />
    </>
  )
}

export {HRDashboardWrapper}
