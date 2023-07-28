import {PageTitle} from '../../../_metronic/layout/core'
import Devexpres from '../dashboard/Devexpres'

const HRDashboardPage = () => {
  return <Devexpres dashboardId={'HRDashBoard'} />
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
