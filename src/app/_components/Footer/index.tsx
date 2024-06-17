import React from 'react'
import Link from 'next/link'

import { Footer as FooterTypes } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'

import classes from './index.module.scss'
import FooterComponent from './FooterComponent'

export async function Footer() {
  let footer: FooterTypes | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <>
      <FooterComponent footer={footer} />
    </>
    // <footer className={classes.footer}>
    //   <Gutter className={classes.wrap}>
    //     <Link href="/">
    //       <picture>
    //         <img
    //           className={classes.logo}
    //           alt="Payload Logo"
    //           src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"
    //         />
    //       </picture>
    //     </Link>
    //     <nav className={classes.nav}>
    //       <ThemeSelector />
    //       {navItems.map(({ link }, i) => {
    //         return <CMSLink key={i} {...link} />
    //       })}
    //       <Link href="/admin">Admin</Link>
    //       <Link
    //         href="https://github.com/payloadcms/payload/tree/main/templates/ecommerce"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Source Code
    //       </Link>
    //       <Link href="https://payloadcms.com" target="_blank" rel="noopener noreferrer">
    //         Payload
    //       </Link>
    //     </nav>
    //   </Gutter>
    // </footer>
  )
}
