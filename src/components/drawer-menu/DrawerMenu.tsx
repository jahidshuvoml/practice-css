import React from 'react'
import style from './drawerMenu.module.scss'
import Link from 'next/link'

type DrawerMenuProps = {
    isOpen?:boolean
}

const DrawerMenu = ({isOpen}:DrawerMenuProps) =>{
  return (
    <div className={`${style.main} ${isOpen?style.open:''}`}>
        <ul>
            <li><Link href={'/'}>Promotion of the month</Link></li>
            <li><Link href={'/'}>Promotion of the month</Link></li>
            <li><Link href={'/'}>Promotion of the month</Link></li>
            <li><Link href={'/'}>Promotion of the month</Link></li>
            <li><Link href={'/'}>Promotion of the month</Link></li>
            <li><Link href={'/'}>Promotion of the month</Link></li>
            <li><Link href={'/'}>Promotion of the month</Link></li>
            <li><Link href={'/'}>Promotion of the month</Link></li>
            <li><Link href={'/'}>Promotion of the month</Link></li>
        </ul>
    </div>
  )
}

export default DrawerMenu