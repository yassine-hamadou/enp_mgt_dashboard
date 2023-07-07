import {KTCard, KTCardBody} from '../../../_metronic/helpers'
import Devexpres from '../dashboard/Devexpres'

function FinancePage() {
  return (
    <>
      <KTCard>
        <KTCardBody>
          <Devexpres dashboardId={'Finance'} />
        </KTCardBody>
      </KTCard>
    </>
  )
}
export default FinancePage
