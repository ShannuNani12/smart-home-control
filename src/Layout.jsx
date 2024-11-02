import React from 'react'
import NavComp from './NavComp'
import { Outlet } from 'react-router-dom'
import styles from "./shc.module.css"

const Layout = () => {
  return (
    <div className={styles.layoutcont}>
        <NavComp/>
        <Outlet/>
    </div>
  )
}

export default Layout