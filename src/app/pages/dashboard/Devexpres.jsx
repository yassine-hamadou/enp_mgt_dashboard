import {DashboardControl} from 'devexpress-dashboard-react'
import {BASE_URL} from '../../../url'

const Devexpres = (props) => {
  return (
    <div style={{width: '100%', height: '80vh'}}>
      <DashboardControl
        id='web-dashboard'
        style={{height: '100%'}}
        endpoint={`${BASE_URL}/dashboards/dashboardcontrol`}
        //optional configuration with default values
        workingMode={props.workingMode ? props.workingMode : 'ViewerOnly'}
        dashboardId={props.dashboardId}
      ></DashboardControl>
    </div>
  )
}

export default Devexpres
