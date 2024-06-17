{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Link from 'next/link'

import { Header as HeaderType } from '../../../payload/payload-types'
import HeaderComponent from './HeaderComponent'
import { fetchHeader } from '../../_api/fetchGlobals'
import { HeaderNav } from './Nav'

import classes from './index.module.scss'

export async function Header() {
  let header: HeaderType | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    console.error(error)
  }

  return (
    <>
      <HeaderComponent header={header} />
    </>
  )
}
