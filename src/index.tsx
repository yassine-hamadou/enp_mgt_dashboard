import {createRoot} from 'react-dom/client'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
// Apps
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n'
import { registerLicense } from '@syncfusion/ej2-base';

/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/plugins.scss'
import './_metronic/assets/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios)
Chart.register(...registerables)
// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSn5Rd0ZnXn9Zc3VRRg==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdUVhWHxad3RSRWNZUQ==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZjW35ddHNVQWNZU0Q=;MTI0MjYyNEAzMjMwMmUzNDJlMzBVSHJ6ak5lNGs3cDgwWjFGeEZQejFnN3VNeVpEOHZmQTg5S2FrN3VLaVdBPQ==;MTI0MjYyNUAzMjMwMmUzNDJlMzBERWhkYWw1RUQ5RUtOWFQ3VnVPR1ZPZysrQmFWbTV0R1RvYkJUL3pqeWJ3PQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVgWX1fc3BSRmdYUkB2;MTI0MjYyN0AzMjMwMmUzNDJlMzBQSlFjQ1VROUtZZElCVlRncGFTR0pPZDFvRWJIWDR4Q2FabTlxM0FGaE84PQ==;MTI0MjYyOEAzMjMwMmUzNDJlMzBOcXF1MG9IRUIxbW5RSHVtM2x5QmVneDFWaWZiS1hLOHdXZHBqRVcvaHdrPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZjW35ddHNVQWVfUEQ=;MTI0MjYzMEAzMjMwMmUzNDJlMzBGc2NpTUFEQ1pPVmcrSDgyVVZ0M3Y4MzlzUkNsQnUyMnNVS1hjcjJYRVo0PQ==;MTI0MjYzMUAzMjMwMmUzNDJlMzBWbDdFQWlET0J4bTdlY1hEeDVGTWhtQm5zWkFySGFJb0RvTXl6Mlp4VlMwPQ==;MTI0MjYzMkAzMjMwMmUzNDJlMzBQSlFjQ1VROUtZZElCVlRncGFTR0pPZDFvRWJIWDR4Q2FabTlxM0FGaE84PQ==');

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <MetronicI18nProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </MetronicI18nProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
