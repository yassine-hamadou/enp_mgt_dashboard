import {MixedWidget8, TablesWidget5} from "../../../_metronic/partials/widgets";

function serviceManager() {
    return (
      <div className='row g-5 gx-xxl-8'>
          <div className='col-xxl-4'>
              <MixedWidget8
                className='card-xxl-stretch mb-xl-3'
                chartColor='success'
                chartHeight='150px'
              />
          </div>
          <div className='col-xxl-8'>
              <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
          </div>
      </div>
    );
}

export default serviceManager;
