import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./shc.module.css"
// import all devices images
import lightpng from "./assets/lightpng.png"
import lightoffpng from "./assets/lightoff2png.png"
import fanpng from "./assets/fanpng.png"
import acpng from "./assets/ac2png (2).png"
import campng from "./assets/campng.png"
import tvpng from "./assets/tvpng.png"
import sun from "./assets/sun.png"
import cctvrec from "./assets/cctvrecording.png"

const Dashboard = (props) => {
    let { email, psd, uemail, upsd } = props;
    let [lightname, setLightName] = useState("Light")
    let [fanname, setFanName] = useState("Fan")
    let [acname, setAcName] = useState("AC")
    let [camname, setCamName] = useState("Camera")
    let [tvname, setTvName] = useState("Tv")
    let [for1Light,setFor1Light]=useState(false)
    let [date,setDate]=useState(new Date())
    let [amrpm,setAmrPm]=useState("AM");

    useEffect(()=>{
        setTimeout(()=>{
            setDate(new Date());
            if(date.getHours()>=12){
                setAmrPm("PM")
            }
        },100)
    },[date])

    const [userData, setUserData] = useState([]);
    let [status, setStatus] = useState(false);
    // ********** Light Monitering **********
    let [status1, setStatus1] = useState(false);
    let [status2, setStatus2] = useState(false);
    let changeStatus1=()=>{
        setStatus2(true)
        setStatus1(true)
    }
    let changeStatus2=()=>{
        setStatus2(false)
        setStatus1(false)
    }
    //************* */ Fan Monitering **********
    let [fstatus1, fsetStatus1] = useState(false);
    let [fstatus2, fsetStatus2] = useState(false);
    let fchangeStatus1=()=>{
        fsetStatus2(true)
        fsetStatus1(true)
    }
    let fchangeStatus2=()=>{
        fsetStatus2(false)
        fsetStatus1(false)
    }

    // *************** Tv Monitering **************
    let [tvstatus1, tvsetStatus1] = useState(false);
    let [tvstatus2, tvsetStatus2] = useState(false);
    let tvchangeStatus1=()=>{
        tvsetStatus2(true)
        tvsetStatus1(true)
    }
    let tvchangeStatus2=()=>{
        tvsetStatus2(false)
        tvsetStatus1(false)
    }
    // ************* Ac Monitering  **************
    let [acstatus1, acsetStatus1] = useState(false);
    let [acstatus2, acsetStatus2] = useState(false);
    let acchangeStatus1=()=>{
        acsetStatus2(true)
        acsetStatus1(true)
    }
    let acchangeStatus2=()=>{
        acsetStatus2(false)
        acsetStatus1(false)
    }

    let [closeStatus, setCloseStatus] = useState(false);
    let closeRecord=()=>{
        setCloseStatus(false);
    }
    let openRecord=()=>{
        setCloseStatus(true);
    }

    let [a, setA] = useState(true);
    let changeA = () => {
        setA(!a);
        setStatus(true);
        console.log("User data"+userData.name);
    }
    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then(res => {
                setUserData(res.data.find(item => item.email == uemail || item.email == email));
                console.log(userData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [a]);

    let changeLightName = (name) => {
        setLightName(name)
        setFor1Light(true)
    }
    let changeFanName = (name) => {
        setFanName(name)
    }
    let changeCamName = (name) => {
        setCamName(name)
    }
    let changeAcName = (name) => {
        setAcName(name)
    }
    let changeTvName = (name) => {
        setTvName(name)
    }
    let [rotate, setRotate] = useState(0);
    let [temp, setTemp] = useState(28);

    let increment=()=>{
      
      if(temp<28)
      {
        setRotate((deg)=>deg+20);
      setTemp(temp+1);
       
      }
    }
     let decrement=()=>{
     
      if(temp>16)
      {
        setRotate((deg)=>deg-20);
        setTemp(temp-1); 
      }
    }
  
    return (
        <div className={styles.dashBoardcont}>
            {status ?
                <>
                    <div className={styles.dashBFinel}>
                    <div className={styles.dashUser}><h3>Hello!🖐️ Mr.{userData.name}</h3></div>
                        <div className={styles.contLeft}>
                            <div className={styles.weather}>
                                <h1>Weather</h1>
                                <img className={styles.sunimg} src={sun} alt="" />
                                <h4>39°C/25°F <br />
                                Wind: 6 KMPH Humidity: 36% <br /><br />
                                {date.getHours()>12?date.getHours()-12:date.getHours()}:{date.getMinutes()}:{date.getSeconds()} &nbsp; {amrpm}
                                </h4>
                            </div>
                            <div className={styles.light}>
                                <h4>{lightname}</h4>
                                <div className={styles.top}>
                                    <div className={styles.lampcont}>
                                        <img className={styles.setuppngs} id={status1?styles.lamp:styles.lamp2} src={status1?lightpng:lightoffpng} alt="" />
                                    </div>
                                </div>
                                
                                <div className={styles.eachDevices}>
                                    <ul className={styles.unorder}>
                                        {userData.Lights.map((ele, index) => { return (<li key={index}><button className={styles.lightbtn}  onClick={() => { changeLightName(ele) }}>{ele}</button><button onClick={()=>{changeStatus1()}} className={status1?styles.On:""} >On</button><button className={status2?"":styles.Off} onClick={()=>{changeStatus2()}}>Off</button></li>) })}
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.fancont}>
                            
                            <h4>{fanname}</h4>
                            <div className={styles.top}>
                                <img className={styles.setuppngs} src={fanpng} alt="" />
                                </div>
                                
                                <div className={styles.eachDevices}>
                                    <ul className={styles.unorder}>
                                        {userData.Fans.map((ele, index) => { return (<li key={index}> <button onClick={() => { changeFanName(ele)}}>{ele}</button><button onClick={()=>{fchangeStatus1()}} className={fstatus1?styles.On:""}>On</button><button onClick={()=>{fchangeStatus2()}} className={fstatus2?"":styles.Off}>Off</button> </li>) })}
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.camcont}>
                                <h4>{camname}</h4>
                                <div className={styles.top}>
                                <img className={styles.setuppngs} src={campng} alt="" />
                                </div>
                                <div className={styles.eachDevices}>
                                    <ul className={styles.unorder}>
                                        {userData.Cams.map((ele, index) => { return (<li key={index}> <button onClick={() => { changeCamName(ele) }}>{ele}</button><button onClick={()=>{openRecord()}}>Watch</button> </li>) })}
                                    </ul>
                                </div>
                                {closeStatus?<><div className={styles.camrecords}>
                                    <button className={styles.closeRecords} onClick={closeRecord}>❌</button>
                                    <img className={styles.randomrecords} src={cctvrec} alt="" />
                                </div></>:""}
                            </div>
                            <div className={styles.tvcont}>
                            
                                <h4>{tvname}</h4>
                                <div className={styles.top}>
                                <img className={styles.setuppngs} src={tvpng} alt="" />
                                </div>
                                <div className={styles.eachDevices}>
                                    <ul className={styles.unorder}>
                                    {userData.Tvs.map((ele, index) => { return (<li key={index}> <button onClick={() => { changeTvName(ele)}}>{ele}</button><button onClick={()=>{tvchangeStatus1()}} className={tvstatus1?styles.On:""}>On</button><button onClick={()=>{tvchangeStatus2()}} className={tvstatus2?"":styles.Off}>Off</button> </li>) })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.accont}>
                            
                            <div className={styles.acsubcont}>
                            
                            <h4>{acname}</h4>
                            <div className={styles.top}>
                                <img id={styles.acpngforDb} className={styles.setuppngs} src={acpng} alt="" />
                                </div>
                                <p className={styles.tempreading}>{temp}°C</p>
                                <div className={styles.AcController}>
                                    <button className={styles.incdecbtn} onClick={decrement}>-</button>
                                    <section className={styles.indicator} style={{ transform:`rotate(${rotate}deg)`}}>
                                        <aside className={styles.indicatorball}></aside>
                                    </section>
                                    <button  className={styles.incdecbtn}  onClick={increment}>+</button>
                                </div>

                                <div className={styles.eachDevices}>
                                <ul className={styles.unorder}>
                                {userData.Acs.map((ele, index) => { return (<li key={index}> <button onClick={() => { changeAcName(ele)}}>{ele}</button><button onClick={()=>{acchangeStatus1()}} className={acstatus1?styles.On:""}>On</button><button onClick={()=>{acchangeStatus2()}} className={acstatus2?"":styles.Off}>Off</button> </li>) })}
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div></> :
                <><div className={styles.sufullyLogincont}>
                    Succefully Login..!
                    <button className={styles.SuccessLogin} onClick={changeA}>Ok</button>
                </div></>}
        </div>
    );
};

export default Dashboard;
