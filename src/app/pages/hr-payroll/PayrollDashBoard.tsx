/* eslint-disable jsx-a11y/anchor-is-valid */
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {PayrollChart} from './PayrollChart'
import {FC} from 'react'

const PayrollDashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-12'>
        <PayrollChart className='mb-xl-8' chartColor='primary' chartHeight='350px' />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const PayrollDashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PayrollDashboardPage />
    </>
  )
}

export {PayrollDashboardWrapper}
