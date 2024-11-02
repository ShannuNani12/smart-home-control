import React from 'react'
import styles from "./shc.module.css"
import { FaRegAddressCard } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <div className={styles.contactcont}>
        <div className={styles.contactimg}></div>
        <div className={styles.Contactus}>
          <section className={styles.contactusways}>
          <h1><FaRegAddressCard /></h1>
          <h3>ADDRESS</h3>
          <p  className={styles.pdata}>198 West 21th Street,Suite 721 New York,NY 10010</p>
          </section>
          <section className={styles.contactusways}>
          <a className={styles.acontact} href="https://wa.me//+918012345679?text=Hai"><h1><FaWhatsapp /></h1>
          <h3>Whatsaap  </h3>
          <p  className={styles.pdata}>phone: 1-800-1234-567</p>
          </a></section>
          <section className={styles.contactusways}><a className={styles.acontact} href="https://mail.google.com/mail/?view=cm&fs=1&to=office@yourdomain.com &su=SUBJECT&body=BODY">
          <h1><CgMail /></h1>
          <h3>E-MAILS</h3>
          <p className={styles.pdata}>office@yourdomain.com <br />
            youremail@domain.com</p></a>
          </section>
          <section className={styles.contactusways}>
          <h1><FaPhone /></h1>
          <h3>PHONES</h3>
          <p  className={styles.pdata}>phone: 1-800-1234-567 Cell: 1-800-1234-568</p>
          </section>
        </div>
    </div>
  )
}

export default Contact