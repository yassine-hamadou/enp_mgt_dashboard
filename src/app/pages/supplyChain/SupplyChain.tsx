import {PageTitle} from '../../../_metronic/layout/core'
import Devexpres from '../dashboard/Devexpres'

const SupplyChain = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>{'SupplyChain Dashboard'}</PageTitle>
      <div className='row gy-5 g-xl-8 mb-7'>
        <div className='col-xxl-6'>
          <Devexpres dashboardId={'SupplyChain'} />
        </div>
      </div>
    </>
  )
}

export {SupplyChain}
