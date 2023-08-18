import React, {lazy, FC, Suspense} from 'react'
import {ErrorBoundary} from '@ant-design/pro-components'
import {Route, Routes, Navigate, Outlet} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {PageTitle} from '../../_metronic/layout/core'
import {Soon} from '../modules/errors/components/Error404'
import {WithChildren} from '../../_metronic/helpers'
import AllReportPage from '../reports/AllReportPage'
const FinancePage = lazy(() => import('../pages/finance/FinancePage'))
const ReportComponent = lazy(() => import('../reports/ReportComponent'))
const HRDashboardWrapper = lazy(() => import('../pages/hr-payroll/HumanResourceDashBoard'))
const SupplyChain = lazy(() => import('../pages/supplyChain/SupplyChain'))
const ServiceManager = lazy(() => import('../pages/dashboard/DashboardWrapper'))
const ProductionDashboardWrapper = lazy(
  () => import('../pages/production/dashboard/ServiceManagerDashboardWrapper')
)
const Devexpres = lazy(() => import('../pages/dashboard/Devexpres'))
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registration */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        <Route
          path='/report'
          element={
            <>
              <Suspense fallback={<TopBarProgress />}>
                <ErrorBoundary>
                  <Devexpres dashboardId={'report'} />
                </ErrorBoundary>
              </Suspense>
            </>
          }
        />
        <Route
          path='dashboard'
          element={
            <ErrorBoundary>
              <Suspense fallback={<TopBarProgress />}>
                <PageTitle>{'Activity'}</PageTitle>
                <Devexpres dashboardId={'Activity'} />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path='finance/*'
          element={
            <ErrorBoundary>
              <Suspense fallback={<TopBarProgress />}>
                <Devexpres dashboardId={'Finance'} />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path='hr/*'
          element={
            <ErrorBoundary>
              <Suspense fallback={<TopBarProgress />}>
                <Devexpres dashboardId={'HRDashBoard'} />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path='payroll/*'
          element={
            <ErrorBoundary>
              <Suspense fallback={<TopBarProgress />}>
                <Soon />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path='supply-chain/*'
          element={
            <ErrorBoundary>
              <Suspense fallback={<TopBarProgress />}>
                {/*<SupplyChain />*/}
                <PageTitle breadcrumbs={[]}>{'SupplyChain Dashboard'}</PageTitle>
                <Devexpres dashboardId={'SupplyChain'} />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path='production/*'
          element={
            <ErrorBoundary>
              <Suspense fallback={<TopBarProgress />}>
                <PageTitle>{'Production'}</PageTitle>
                {/*<ProductionDashboardWrapper />*/}
                <Devexpres dashboardId={'pro_cycleDetails'} />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path='svc-manager/*'
          element={
            <Suspense fallback={<TopBarProgress />}>
              <PageTitle>{'Service Manager Dashboard'}</PageTitle>
              {/*<ServiceManager />*/}
              <Devexpres dashboardId={'dashboard3'} />
            </Suspense>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

export {PrivateRoutes}
