import React from 'react'
import styles from "./shc.module.css"

const Services = () => {
  return (
    <div className={styles.servicescont}>
      <div className={styles.servicesContent}>SERVICES Catalog</div>
      <div className={styles.servicesConContainer}>
        <aside className={styles.asideComp}> ✅Full planning and configuration assistance</aside>
        <aside className={styles.asideComp}> ✅Annual maintenance checks</aside>
        <aside className={styles.asideComp}> ✅Product consultation & training courses</aside>
        <aside className={styles.asideComp}> ✅Discreet installation</aside>
        <aside className={styles.asideComp}> ✅24-hour alarm monitoring</aside>
        <aside className={styles.asideComp}> ✅Full cover maintenance</aside>
      </div>
    </div>
  )
}

export default Services