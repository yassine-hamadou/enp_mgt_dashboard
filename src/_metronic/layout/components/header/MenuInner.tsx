import React from 'react'
import {MenuItem} from './MenuItem'
import {useIntl} from 'react-intl'
import {ABSOLUTE_PUBLIC_PATH} from 'mini-css-extract-plugin/types/utils'
import {Finance} from './Finance'

export function MenuInner() {
  return (
    <>
      <MenuItem title={'Report'} to='/report' />
      <MenuItem title={'General'} to='/dashboard' />
      <MenuItem title='Finance' to='/finance' />

      {/*<Finance*/}
      {/*  title={'Finance'}*/}
      {/*  to={''}*/}
      {/*  onClick={() => {*/}
      {/*    window.open('http://208.117.44.15:81', '_blank')*/}
      {/*  }}*/}
      {/*/>*/}

      <MenuItem title={'Supply Chain'} to={'/supply-chain'} />
      <MenuItem title='Equip. Srvc and Maintenance' to='/svc-manager' />
      <MenuItem title='Production' to='/production' />
      <MenuItem title='HR' to='/hr' />
      <MenuItem title={'Payroll'} to={'/payroll'} />
    </>
  )
}
