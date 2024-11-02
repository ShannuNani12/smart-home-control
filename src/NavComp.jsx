import React from 'react'
import styles from "./shc.module.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import Logo from "./assets/smarthomeLogo.png"

const NavComp = () => {
  return (
    <div className={styles.navcont}>
      <article className={styles.left}>
        <img className={styles.smarthomeLogo} src={Logo} alt="" />Smart Home
          {/* <img className={styles.logo} src={logo} alt="" /> */}
        </article>
        <article className={styles.right}>
            <NavLink to="/" className={styles.navitems} id={styles.home}>Home</NavLink>
            <section id={styles.homeul}></section>
            <NavLink to="/services" className={styles.navitems} id={styles.products}>Services</NavLink>
            <section id={styles.productul}></section>
            <NavLink to="/about" className={styles.navitems} id={styles.orders}>About</NavLink>
            <section id={styles.orderul}></section>
            <NavLink to="/contact" className={styles.navitems} id={styles.checkout}>Contact</NavLink>
            <section id={styles.checkoutul}></section>
        </article>
    </div>
  )
}
export default NavComp