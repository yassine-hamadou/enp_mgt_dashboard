/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import Devexpres from './Devexpres'

const DashboardPage = () => <Devexpres dashboardId={'dashboard3'} />

const ServiceManager = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>ESMS DashBoard</PageTitle>
      <DashboardPage />
    </>
  )
}

export default ServiceManager
