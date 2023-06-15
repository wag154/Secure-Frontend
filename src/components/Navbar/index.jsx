import React from 'react'
import {NavLink, Outlet} from "react-router-dom"
import styles from "./index.module.css"
export default function index() {
  return (
    <>
    <nav className={styles.navcontainer}>
      <ul className={styles.ulcontainer}>
      <div className={styles.optcontainer}>
        <NavLink to = "/">Home</NavLink>
      
      </div>
      <NavLink to = "/access" className={styles.account}>Account</NavLink>
      </ul>
    </nav>
      <Outlet/>
    </>
  )
}