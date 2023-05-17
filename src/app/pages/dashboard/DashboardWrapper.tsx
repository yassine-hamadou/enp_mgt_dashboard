/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {BarChart} from './BarChart'
import {BarChart2} from './BarChart2'
import {DashboardTable} from './dashboardTable/CycleDetailsList'

const DashboardPage = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-6'>
        <BarChart
          className='card-xxl-stretch mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='200px'
        />
        {/*<ColumnChart/>*/}
      </div>
      <div className='col-xl-6'>
        {/*<DownTypeFaultType/>*/}
        <BarChart2
          className='card-xxl-stretch mb-5 mb-xl-8'
          chartColor='danger'
          chartHeight='200px'
        />
      </div>
    </div>
    {/* end::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-12'>
        {/*card-xxl-stretch mb-5 mb-xl-8*/}
        <DashboardTable />
      </div>
    </div>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
