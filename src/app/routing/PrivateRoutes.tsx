import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate, Outlet} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import {ServiceManager} from '../pages/dashboard/DashboardWrapper'
import {ProductionDashboardWrapper} from '../pages/production/dashboard/ServiceManagerDashboardWrapper'
import {PageTitle} from '../../_metronic/layout/core'
import {HRDashboardWrapper} from '../pages/hr-payroll/HumanResourceDashBoard'
import {Soon} from '../modules/errors/components/Error404'
import MainDashboard from '../pages/dashboard/mainDashboard/BarChart'
import {SupplyChain} from '../pages/supplyChain/SupplyChain'
import Devexpres from '../pages/dashboard/Devexpres'

const PrivateRoutes = () => {
  const FinancePage = lazy(() => import('../pages/finance/FinancePage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route
          path='dashboard'
          element={
            <>
              <PageTitle>{'Activity'}</PageTitle>
              <Devexpres dashboardId={'Activity'} />
            </>
          }
        />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='finance/*'
          element={
            <SuspensedView>
              <PageTitle breadcrumbs={[]}>{'Finance Dashboard'}</PageTitle>
              <FinancePage />
            </SuspensedView>
          }
        />
        <Route
          path='hr/*'
          element={
            <SuspensedView>
              <HRDashboardWrapper />
            </SuspensedView>
          }
        />
        <Route
          path='payroll/*'
          element={
            <SuspensedView>
              <Soon />
            </SuspensedView>
          }
        />
        <Route
          path='supply-chain/*'
          element={
            <SuspensedView>
              <SupplyChain />
            </SuspensedView>
          }
        />
        <Route
          path='production/*'
          element={
            <SuspensedView>
              <Outlet />
            </SuspensedView>
          }
        >
          <Route
            path=''
            element={
              <>
                <PageTitle breadcrumbs={[]}>{'Production'}</PageTitle>
                <ProductionDashboardWrapper />
              </>
            }
          />
        </Route>
        <Route
          path='svc-manager/*'
          element={
            <SuspensedView>
              <PageTitle breadcrumbs={[]}>{'Service Manager Dashboard'}</PageTitle>
              <ServiceManager />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
