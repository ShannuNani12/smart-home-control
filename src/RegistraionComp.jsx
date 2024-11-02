import React, { useEffect, useState } from 'react'
import styles from "./shc.module.css"
import Dashboard from './Dashboard';

import v from "./assets/bgforRegvideo.mp4"

//setup Images **********
import lightpng from "./assets/lightpng.png"
import fanpng from "./assets/fanpng.png"
import acpng from "./assets/acpng (2).png"
import campng from "./assets/campng.png"
import tvpng from "./assets/tvpng.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const RegistraionComp = () => {

    let [status1, setStatus1] = useState(true);//to reg or log in
    let [status2, setStatus2] = useState(false);//succesful log in and reg
    let [status22, setStatus22] = useState(false);//to go dashboard
    let [status3, setStatus3] = useState(true);//validating input
    let [status31, setStatus31] = useState(true);//reg status
    let [status4, setStatus4] = useState(true);//to set css for form while changing

    let [cptch, setCptch] = useState();

    let captcheArray = ["A$kL10", "Tt9sK3", "dgd#12", "H1Op#a", "jJ5&4n", "Ln#2s&", "A#2L10", "Tq9sK3", "knsk%s", "oK#a!3"];
    let b = Math.floor(Math.random() * 10)

    let getCaptche = () => {
        setCptch(captcheArray[b]);
    }

    let [state, setState] = useState({
        name: "",
        email: "",
        phnNo:"",
        psd: "",
        cfpsd: "",
    })
    let { name, email,phnNo, psd, cfpsd } = state;


    let [state2, setState2] = useState({
        uemail: "",
        upsd: "",
        uusercaptche: ""
    })
    let { uemail, upsd, uusercaptche } = state2

    let handelChange2 = (e) => {
        let { name, value } = e.target;
        setState2({ ...state2, [name]: value })
    }

    let changepage = () => {
        setStatus1(false)
        setStatus4(false)
        setStatus3(true)
    }
    let changepagetoreg = () => {
        setStatus1(true)
        setStatus4(true)
        setStatus3(true)
    }

    // To check the user is already Registered or not
    let [regData,setRegData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/user").then((res)=>{
            setRegData(res.data)
        }).catch(()=>{
            console.log("Data Not found");
        })
    },[])

    let checkWithRegUser=()=>{
        let a=regData.filter((ele)=>{
            return(ele.email===email||ele.phnNo===phnNo)
        })
        if(a[0]){
            return false; 
        }
        else{
            return true;
        }
    }

    let handelSubmit = (e) => {
        e.preventDefault();
        console.log("hai");
        if (status1 && name && email && phnNo.length===10 && psd && psd===cfpsd&&checkWithRegUser()) {
            setStatus2(true);
        }
        else if(!checkWithRegUser()){
            setStatus31(false)
            setStatus3(true)
        }
        else {
            setStatus3(false)
            setStatus31(true)
        }
    }

    let checkloginwithreguser=()=>{
        let b=regData.filter((ele)=>{
            return (uemail===ele.email&&upsd===ele.psd)
        })
        if(b[0]){
            return true;
        }
        else{
            return false;
        }
    }

    let handelSubmit2 = (e) => {
        e.preventDefault();
        if (!status1 && uemail && checkloginwithreguser() && uusercaptche === cptch) {
            setStatus2(true);
            setStatus22(true);
        }
        else {
            setStatus3(false)
        }
    }

    let handelChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    // **********To Setup values*****************
    let [statusac, setStatusAc] = useState(false);
    let [statustv, setStatusTv] = useState(false);
    let [statuscam, setStatusCam] = useState(false);
    let [statuslight, setStatusLight] = useState(false);
    let [statusfan, setStatusFan] = useState(false);
    let [confStatus, setConfStatus] = useState(false);

    let changeConfStatus = () => {
        setConfStatus(!confStatus);
    }

    let changeAcstatus = () => {
        setStatusAc(true);
        setStatusCam(false)
        setStatusTv(false)
        setStatusLight(false)
        setStatusFan(false)
    }
    let changeTvstatus = () => {
        setStatusAc(false);
        setStatusCam(false)
        setStatusTv(true)
        setStatusLight(false)
        setStatusFan(false)
    }
    let changeCamstatus = () => {
        setStatusAc(false);
        setStatusCam(true)
        setStatusTv(false)
        setStatusLight(false)
        setStatusFan(false)
    }
    let changeLightstatus = () => {
        setStatusAc(false);
        setStatusCam(false)
        setStatusTv(false)
        setStatusLight(true)
        setStatusFan(false)
    }
    let changeFanstatus = () => {
        setStatusAc(false);
        setStatusCam(false)
        setStatusTv(false)
        setStatusLight(false)
        setStatusFan(true)
    }
    let allsetupstatusnone = () => {
        setStatusAc(false);
        setStatusCam(false)
        setStatusTv(false)
        setStatusLight(false)
        setStatusFan(false)
        setState({ ...state, "Lights": noLights, "Fans": noFans, "Cams": noCams, "Acs": noAcs, "Tvs": noTvs })
    }


    let [setupState, setSetupState] = useState({
        light: "",
        ac: "",
        tv: "",
        fan: "",
        cam: ""
    })

    let { light, ac, tv, fan, cam } = setupState;

    let handelsetupChanges = (e) => {
        let { name, value } = e.target;
        setSetupState({ ...setupState, [name]: value });
    }
    let [noLights, setNoLights] = useState([])
    let addLights = () => {
        if (light) {
            setNoLights([...noLights, light])
            setSetupState({ ...setupState, "light": "" });
            
        }
    }

    let [noAcs, setNoAcs] = useState([])
    let addAcs = () => {
        if (ac) {
            setNoAcs([...noAcs, ac])
            setSetupState({ ...setupState, "ac": "" });
        }
    }
    let [noCams, setNoCams] = useState([])
    let addCams = () => {
        if (cam) {
            setNoCams([...noCams, cam])
            setSetupState({ ...setupState, "cam": "" });
        }
    }
    let [noTvs, setNoTvs] = useState([])
    let addTvs = () => {
        if (tv) {
            setNoTvs([...noTvs, tv])
            setSetupState({ ...setupState, "tv": "" });
        }
    }
    let [noFans, setNoFans] = useState([])
    let addFans = () => {
        if (fan) {
            setNoFans([...noFans, fan]);
            setSetupState({ ...setupState, "fan": "" });
        }
    }

    let handeSubsetup = (e) => {
        e.preventDefault();
        if(noAcs[0]||noCams[0]||noFans[0]||noLights[0]||noTvs[0]){
            changeConfStatus();
            console.log("hlo1");
        }
        else{
            alert("Please setup atleast one device..!")
        }
    }
let navigate=useNavigate();
    let gotoDashboard = () => {
        axios.post("http://localhost:3000/user",state).then((res)=>{
            console.log(res);
            // useNavigate()
            navigate(<Dashboard/>)
        }).catch(()=>{
            console.log("Data not stored in Data base");
        })
        setStatus22(true);
    }

    return (
        <>
            {status2 ? <>
                {status22 ? <><Dashboard email={`${email}`} psd={`${psd}`} uemail={`${uemail}`}  upsd={`${upsd}`}/></> :
                    <div className={styles.setupCont}>
                        <h3 className={styles.setupdevices}>Setup Your Devices</h3>
                        {/* *********Setup Container******** */}
                        {confStatus ? <>
                            <div className={styles.confCont}><br></br>
                                <p className={styles.texthed}>Confirm all your credintials?</p>

                                <ul className={styles.logincredcont}><br />
                                    <li>Login credintials</li><br />
                                    <li>User Name&nbsp;:{name}</li>
                                    <li>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {email}</li>
                                    <li>Password &nbsp;&nbsp;&nbsp;: {psd}</li>
                                </ul><br />
                                <p className={styles.texthed2}>Your Devices..!</p>
                                <ul className={styles.confdevices}>
                                    <li><img className={styles.confDevicespng} src={lightpng} alt="" />
                                        {state.Lights.map((ele) => {
                                            return (<><li>{ele}</li></>)
                                        })}
                                    </li>

                                    <li><img className={styles.confDevicespng}  src={acpng} alt="" />
                                        {state.Acs.map((ele) => {
                                            return (<><li>{ele}</li></>)
                                        })}
                                    </li>

                                    <li><img className={styles.confDevicespng}  src={tvpng} alt="" />
                                        {state.Tvs.map((ele) => {
                                            return (<><li>{ele}</li></>)
                                        })}
                                    </li>

                                    <li><img className={styles.confDevicespng}  src={campng} alt="" />
                                        {state.Cams.map((ele) => {
                                            return (<><li>{ele}</li></>)
                                        })}
                                    </li>

                                    <li><img className={styles.confDevicespng} src={fanpng} alt="" />
                                        {state.Fans.map((ele) => {
                                            return (<><li>{ele}</li></>)
                                        })}
                                    </li>
                                </ul>
                                <button className={styles.editcanf} onClick={gotoDashboard}>Confirm</button>
                                <button className={styles.editcanf} onClick={changeConfStatus}>Edit</button>
                            </div>
                        </> : <>
                            <form className={styles.setupformcont} action="" onSubmit={handeSubsetup}>
                                <div id={styles.lightcont} className={styles.setupComp}>
                                    <img onClick={changeLightstatus} className={styles.setuppngs} src={lightpng} alt="" />
                                    {statuslight ? <form id={styles.lightgetin} className={styles.getDataform} action="">
                                        <input className={styles.getin} name='light' value={light} onChange={handelsetupChanges} type="text" placeholder='Give a Light Name' /><br></br>
                                        <input id={styles.getin} className={styles.getin} onClick={addLights} type="button" value="Add Light" />
                                        <br></br>
                                        <div className={styles.itemscont}>
                                            <ul>
                                                {noLights.map((ele) => {
                                                    return (<>
                                                        <li>{ele}</li></>)
                                                })}
                                            </ul>
                                        </div>
                                        <button onClick={allsetupstatusnone} className={styles.donebtn} type='Submit'>Done</button>
                                    </form> : ""}

                                </div>
                                <div id={styles.accont} className={styles.setupComp}>
                                    <img onClick={changeAcstatus} className={styles.setuppngs} src={acpng} alt="" />
                                    {statusac ? <form id={styles.acgetin} className={styles.getDataform} action="">
                                        <input className={styles.getin} name='ac' value={ac} onChange={handelsetupChanges} type="text" placeholder='Give an Ac Name' /><br></br>
                                        <input id={styles.getin} className={styles.getin} onClick={addAcs} type="button" value="Add Ac" />
                                        <br></br>
                                        <div className={styles.itemscont}>
                                            <ul>
                                                {noAcs.map((ele) => {
                                                    return (<>
                                                        <li>{ele}</li></>)
                                                })}
                                            </ul>
                                        </div>
                                        <button onClick={allsetupstatusnone} className={styles.donebtn} type='Submit'>Done</button>
                                    </form> : ""}

                                </div>
                                <div id={styles.fancont} className={styles.setupComp}>
                                    <img onClick={changeFanstatus} className={styles.setuppngs} src={fanpng} alt="" />
                                    {statusfan ? <form id={styles.fangetin} className={styles.getDataform} action="">
                                        <input className={styles.getin} name='fan' value={fan} onChange={handelsetupChanges} type="text" placeholder='Give a Fan Name' /><br></br>
                                        <input id={styles.getin} className={styles.getin} onClick={addFans} type="button" value="Add Fan" />
                                        <br></br>
                                        <div className={styles.itemscont}>
                                            <ul>
                                                {noFans.map((ele) => {
                                                    return (<>
                                                        <li>{ele}</li></>)
                                                })}
                                            </ul>
                                        </div>
                                        <button onClick={allsetupstatusnone} className={styles.donebtn} type='Submit'>Done</button>
                                    </form> : ""}
                                </div>

                                <div id={styles.tvcont} className={styles.setupComp}>
                                    <img onClick={changeTvstatus} className={styles.setuppngs} src={tvpng} alt="" />
                                    {statustv ? <form id={styles.tvgetin} className={styles.getDataform} action="">
                                        <input className={styles.getin} name='tv' value={tv} onChange={handelsetupChanges} type="text" placeholder='Give a Tv Name' /><br></br>
                                        <input id={styles.getin} className={styles.getin} onClick={addTvs} type="button" value="Add Tv" />
                                        <br></br>
                                        <div className={styles.itemscont}>
                                            <ul>
                                                {noTvs.map((ele) => {
                                                    return (<>
                                                        <li>{ele}</li></>)
                                                })}
                                            </ul>
                                        </div>
                                        <button onClick={allsetupstatusnone} className={styles.donebtn} type='Submit'>Done</button>
                                    </form> : ""}

                                </div>
                                <div id={styles.camcont} className={styles.setupComp}>
                                    <img onClick={changeCamstatus} className={styles.setuppngs} src={campng} alt="" />
                                    {statuscam ? <form id={styles.camgetin} className={styles.getDataform} action="">
                                        <input className={styles.getin} name='cam' value={cam} onChange={handelsetupChanges} type="text" placeholder='Give Camera name' /><br></br>
                                        <input id={styles.getin} className={styles.getin} onClick={addCams} type="button" value="Add Camera" />
                                        <br></br>
                                        <div className={styles.itemscont}>
                                            <ul>
                                                {noCams.map((ele) => {
                                                    return (<>
                                                        <li>{ele}</li></>)
                                                })}
                                            </ul>
                                        </div>
                                        <button onClick={allsetupstatusnone} className={styles.donebtn} type='Submit'>Done</button>
                                    </form> : ""}

                                </div>


                                {statusac ? "" : statuscam ? "" : statusfan ? "" : statuslight ? "" : statustv ? "" : <>
                                    <button className={styles.subbtnn} type='Submit'>Submit</button>
                                </>}

                            </form> </>}
                    </div>}
            </> : <>
                <div className={styles.regtrCont}>
                    <video className={styles.regBgvideo} src={v} loop autoPlay muted></video>
                    <div className={styles.formcont}>
                        <aside className={styles.optionscont}>
                            <button className={status4 ? styles.optbtnsonselect : styles.optbtns} onClick={changepagetoreg}>Register</button>
                            <button className={status4 ? styles.optbtns : styles.optbtnsonselect} onClick={changepage}>Login</button>
                        </aside>
                        {status1 ? <>
                            <form action="" onSubmit={handelSubmit} className={styles.regformcont}>
                                <input className={styles.inputRegpg} type="text" placeholder='Enter user name' name='name' value={name} onChange={handelChange} />
                                <input className={styles.inputRegpg} type="email" placeholder='Enter your email' name='email' value={email} onChange={handelChange} />
                                <input className={styles.inputRegpg} type="tel" name='phnNo' value={phnNo} onChange={handelChange} placeholder='Enter Phone No' />
                                <input className={styles.inputRegpg} type="password" placeholder='Enter passsword' name='psd' value={psd} onChange={handelChange} />
                                <input className={styles.inputRegpg} type="password" placeholder='Confirm password' name='cfpsd' value={cfpsd} onChange={handelChange} />
                                {status3? "" : <p className={styles.invalidmsg}>*Invalid input</p>}
                                {status31 ? "" : <p className={styles.invalidmsg}>*Already Regestered</p>}
                                <button className={styles.subbtnn}>Submit</button>
                            </form>
                        </> : <>
                            <form action="" onSubmit={handelSubmit2} className={styles.loginformcont}>
                                <input className={styles.inputRegpg} type="email" placeholder='Enter your email' name='uemail' value={uemail} onChange={handelChange2} />
                                <input className={styles.inputRegpg} type="password" placeholder='Enter passsword' name='upsd' value={upsd} onChange={handelChange2} />
                                <section className={styles.captchecont}>{cptch}</section>
                                <aside className={styles.getCaptchbtn} onClick={getCaptche}>Get Captche</aside>
                                <input className={styles.inputRegpg} type="text" placeholder='Enter Captche' name='uusercaptche' value={uusercaptche} onChange={handelChange2} />
                                {status3 ? "" : <p className={styles.invalidmsg}>*Invalid input</p>}
                                <input className={styles.subbtnn} onClick={changeConfStatus} type="submit" />
                            </form>
                        </>}
                    </div>
                </div>
            </>}
        </>
    )
}

export default RegistraionComp