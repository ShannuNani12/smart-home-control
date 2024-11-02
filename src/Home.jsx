import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./shc.module.css"

import img1 from "./assets/sliderimg1.jpg"
import img2 from "./assets/sliderimg33.jpg"
import img0 from "./assets/sliderimg3.jpg"
//products images
import img11 from "./assets/ourproducts1.png"
import img22 from "./assets/ourproducts1.png"
import img33 from "./assets/ourproducts1.png"
import img44 from "./assets/ourproducts1.png"
import img4 from "./assets/sliderimg11.jpg"
import img5 from "./assets/sliderimg22.jpg"
import img66 from "./assets/ourproducts1.png"
import img77 from "./assets/ourproducts1.png"
// import Regesterpage from './Regesterpage'

// import our 3 services images
import sensorimg from "./assets/homesensor.png"
import smartalertimg from "./assets/homesmartlert.png"
import notifctrlimg from "./assets/homenotifincontrl.png"
//import Our products
import monitorsen from "./assets/ourproducts1.png"
import windowhandelair from "./assets/ourproduct2window.png"
import watersen from "./assets/ourproductwater.png"
import weathersen from "./assets/ourproductwheather.png"
import smokesen from "./assets/ourproductsmoke.png"
import climatesen from "./assets/ourproductclimate.png"
const Home = () => {

  let [a,setA]=useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      if(a>4){
        setA(1)
      }
      else{
        setA(a+1);
      }
    },3000)
  },[a])

  return (
    <>
      <div className={styles.mainhomcont}>
      <div className={styles.homecont}>
      {/* <Regesterpage/> */}
      <img src={a==1?img2:a==2?img4:a==3?img0:a==4?img5:img1} alt="" className={styles.slider}/>

      <Link to="/regpage">
        <section className={styles.explorecont}>
          <h2>Register/Login</h2>
          <div className={styles.ul}></div>
          <div className={styles.dupul}></div>
      </section>
      </Link>

    </div>

    <div className={styles.secondcont}>
    <section className={styles.secondleft}>
      <header className={styles.hedforsmartsln}>
      MAKE YOUR HOME SMARTER & SAFE
      </header>
      <p className={styles.fcntforsmartsln}>
      You have the opportunity to watch over your home from anywhere and at any time of day or night. A smart house has excellent video quality, live streaming and two-way audio.
      </p>
      <footer className={styles.fcntforsmartsln}> 
      <img src={sensorimg} alt="" />
      <p><span className={styles.spanforservices}>Sensor</span> <br />
The smart sensor provides the foundation for automating key smart home functions such as lighting, alarms, music, heating and more.</p></footer>
      <footer className={styles.fcntforsmartsln}> 
      <img src={smartalertimg} alt="" /> 
<p><span className={styles.spanforservices}>Smart Alerts </span><br />
  Alerts system will send you the notification to your email, text message of your own callback if the anomaly is detected.</p></footer>
      <footer className={styles.fcntforsmartsln}> 
      <img src={notifctrlimg} alt="" />
      <p><span className={styles.spanforservices}>Notification & Control</span> <br />
 Control solution gives you an opportunity to customizable home security and monitoring, giving you peace of mind and keeping your home safe and sound.</p></footer>
    </section>


    <section className={styles.secondright}></section>
   </div>

    <div className={styles.first}>
      <div className={styles.headforproducts}>All Our Products</div>
    
        <aside className={styles.asidecont}>
            <img className={styles.prdimg} src={monitorsen} alt="" />
            {/* <h2 className={styles.prdtxt}>DRESSES&TEES</h2> */}
            <h3 className={styles.prdtxt2}>Monitor Sensor</h3>
        </aside>

        <aside className={styles.asidecont}>
        <img className={styles.prdimg} src={windowhandelair} alt="" />
            {/* <h2 className={styles.prdtxt}>JACKETS</h2> */}
            <h3 className={styles.prdtxt2}>Window Handle Air</h3>
        </aside>

        <aside className={styles.asidecont}>
        <img className={styles.prdimg} src={watersen} alt="" />
            {/* <h2 className={styles.prdtxt}>FOOTWEAR&MORE</h2> */}
            <h3 className={styles.prdtxt2}>Water Sensor</h3>
        </aside>

        <aside className={styles.asidecont}>
        <img className={styles.prdimg} src={weathersen} alt="" />
            {/* <h2 className={styles.prdtxt}>TROUSERS</h2> */}
            <h3 className={styles.prdtxt2}>Weather Sensor</h3>
        </aside>

        <aside className={styles.asidecont}>
        <img className={styles.prdimg} src={smokesen} alt="" />
            {/* <h2 className={styles.prdtxt}>SWEATSHIRTS</h2> */}
            <h3 className={styles.prdtxt2}>Smoke Detector Air</h3>
        </aside>

        <aside className={styles.asidecont}>
        <img className={styles.prdimg} src={climatesen} alt="" />
            {/* <h2 className={styles.prdtxt}>SHIRTS</h2> */}
            <h3 className={styles.prdtxt2}>Climate Control</h3>
        </aside>
   </div> 
      </div>
    </>
  )
}

export default Home