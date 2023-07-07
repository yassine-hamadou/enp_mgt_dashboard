/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {MixedWidget10, MixedWidget11, ListsWidget5} from '../../../_metronic/partials/widgets'
import Devexpres from '../dashboard/Devexpres'
import {MixedWidget2} from './MixedWidget2'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
        <MixedWidget2
          className='card-xl-stretch mb-xl-8'
          chartColor='danger'
          chartHeight='200px'
          strokeColor='#cb1e46'
        />
      </div>
      <div className='col-xxl-4'>
        <ListsWidget5 className='card-xxl-stretch' />
      </div>
      <div className='col-xxl-4'>
        <MixedWidget10
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='150px'
        />
        <MixedWidget11
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='175px'
        />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const ProductionPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Production Dashboard</PageTitle>
      <div className='col-xl-12 mb-7  border border-gray-400'>
        <Devexpres dashboardId={'pro_cycleDetails'} />
      </div>
      <div className='col-xl-12 border border-gray-400'>
        <Devexpres dashboardId={'pro_fuelIntake'} />
      </div>
      <br />
      <br />
    </>
  )
}

export {ProductionPage}
