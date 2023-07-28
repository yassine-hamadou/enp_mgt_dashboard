/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import Devexpres from './Devexpres'

const DashboardPage = () => (
  <>
    {/* begin::Row */}
    <Devexpres dashboardId={'dashboard3'} />
    <br />
    <br />
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-12'>
        <div className='row gy-5 g-xl-8'>
          <div className='col-xl-6'>
            <Devexpres dashboardId={'dashboard4'} />
          </div>
          <div className='col-xl-6'>
            <Devexpres dashboardId={'faultCount'} />
          </div>
        </div>
        <Devexpres dashboardId={'faultSearchable'} />
      </div>
    </div>
  </>
)

const ServiceManager = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>ESMS DashBoard</PageTitle>
      <DashboardPage />
    </>
  )
}

export {ServiceManager}
