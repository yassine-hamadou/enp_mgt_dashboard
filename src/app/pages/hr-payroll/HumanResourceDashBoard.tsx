import {PageTitle} from '../../../_metronic/layout/core'
import Devexpres from '../dashboard/Devexpres'

const HRDashboardPage = () => {
  return (
    <div>
      {/* begin::Row */}
      <div className='row gy-5 g-xl-8 mb-7'>
        <div className='col-xxl-6'>
          <Devexpres dashboardId={'HRDashBoard'} />
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
