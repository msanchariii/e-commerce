'use client'

import React from 'react'
import Link from 'next/link'
import { Header as HeaderType, User } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

const MobileNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  // const navItems = header ?.navItems || []
  const { user } = useAuth()

  return (
    <nav
      className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}
    ></nav>
  )
}

export default MobileNav
