import {PageTitle} from '../../../_metronic/layout/core'
import Devexpres from '../dashboard/Devexpres'

const SupplyChain = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>{'SupplyChain Dashboard'}</PageTitle>
      <Devexpres dashboardId={'SupplyChain'} />
    </>
  )
}

export {SupplyChain}
