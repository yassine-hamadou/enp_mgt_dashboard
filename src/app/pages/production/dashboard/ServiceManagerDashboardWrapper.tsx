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
    </>
  )
}

export default ProductionDashboardWrapper
