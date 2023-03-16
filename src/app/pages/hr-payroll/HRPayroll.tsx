import {ListsWidget3, TablesWidget10} from '../../../_metronic/partials/widgets'

function HRPayroll() {
  return (
    <>
      {/* begin::Row */}
      <div className='row gy-5 gx-xl-8'>
        <div className='col-xxl-4'>
          <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
        </div>
        <div className='col-xl-8'>
          <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
        </div>
      </div>
      {/* end::Row */}
    </>
  )
}

export default HRPayroll
