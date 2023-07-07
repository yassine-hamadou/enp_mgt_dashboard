/* eslint-disable jsx-a11y/anchor-is-valid */
import {PageTitle} from '../../../../_metronic/layout/core'
import Devexpres from '../../dashboard/Devexpres'

const ProductionDashboardWrapper = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Production Dashboard</PageTitle>
      <div className='col-xl-12 mb-7  border border-gray-400'>
        <Devexpres dashboardId={'pro_cycleDetails'} />
      </div>
      <div className='col-xl-12 border border-gray-400'>
        <Devexpres dashboardId={'pro_fuelIntake'} />
      </div>
      <div className='col-xl-12 border border-gray-400'>
        <Devexpres dashboardId={'pro_cycleDetailsAnalysis'} />
        <br />
        <Devexpres dashboardId={'pro_drillEntryAnalysis'} />
        <br />
        <Devexpres dashboardId={'pro_fuelAnalysis'} />
      </div>
    </>
  )
}

export {ProductionDashboardWrapper}
