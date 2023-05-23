import 'devextreme/dist/css/dx.light.css'
import '@devexpress/analytics-core/dist/css/dx-analytics.common.css'
import '@devexpress/analytics-core/dist/css/dx-analytics.light.css'
import '@devexpress/analytics-core/dist/css/dx-querybuilder.css'
import 'devexpress-dashboard/dist/css/dx-dashboard.light.css'
import {DashboardControl} from 'devexpress-dashboard-react'

const Devexpres = () => {
  return (
    <div style={{width: '100%', height: '80vh'}}>
      <DashboardControl
        id='web-dashboard'
        style={{height: '100%'}}
        // endpoint='https://demos.devexpress.com/services/dashboard/api'
        // endpoint='https ://208.117.44.15/dashboards/dashboardcontrol'
        endpoint='http://208.117.44.15/dashboards/dashboardcontrol'
        workingMode='ViewerOnly'
        dashboardId='dashboard3'
      ></DashboardControl>
    </div>
  )
}

export default Devexpres
