import {MixedWidget11, MixedWidget8, TablesWidget5} from '../../../_metronic/partials/widgets'
import {BarChart} from './BarChart'
import {DashboardTable} from './CycleDetailsList'

function serviceManager() {
  return (
    <>
      {/* begin::Row */}
      <div className='row gy-5 g-xl-8'>
        <div className='col-xl-6'>
          <BarChart
            className='card-xxl-stretch mb-5 mb-xl-8'
            chartColor='primary'
            chartHeight='200px'
          />
        </div>
        <div className='col-xl-6'>
          <MixedWidget11
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
}

export default serviceManager
