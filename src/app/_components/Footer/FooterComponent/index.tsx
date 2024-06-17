'use client'
import React from 'react'

import classes from './index.module.scss'

import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import { Footer } from '../../../../payload/payload-types'
import Link from 'next/link'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ' '}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map((inclusion, index) => {
            return (
              <li key={index}>
                <Image src={inclusion.icon} alt={inclusion.title} height={36} width={36} />
                <h5 className={classes.title}>{inclusion.title}</h5>
                <p>{inclusion.description}</p>
              </li>
            )
          })}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href={'/'}>
              <Image src={'/logo-white.svg'} alt="logo" width={170} height={60} />
            </Link>
            <p>{footer.copyright}</p>
            <div></div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
