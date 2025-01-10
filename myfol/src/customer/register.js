import axios from "axios";
import Alert from '@mui/material/Alert';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect, useState } from "react"

export default function Register(){
    let [state,setState]=useState([]);
    let [ctry,setCtry]=useState([]);
    let[mailLoad,SetmailLoad]=useState('none');
    let[mailnotfound,SetmailnotFound]=useState('none');
    let[passCheck,SetpassCheck]=useState('none');
    let f1=(event)=>{
        event.preventDefault();
        let t1=document.getElementById("email");
        let t2=document.getElementById("pass");
        let t3=document.getElementById("name");
        let t4=document.getElementById("surname");
        let t5=document.getElementById("number");
        let t6=document.getElementById("txtAddress");
        let t7=document.getElementById("ctr");
        let t8=document.getElementById("state");
        let t9=document.getElementById("txtCity");
        let t10=document.getElementById("txtPin");
        let obj={email:t1.value,upass:t2.value,fname:t3.value,lname:t4.value,mobile:t5.value,address:t6.value,country:t7.value,state:t8.value,city:t9.value,pincode:t10.value};
        let json=JSON.stringify(obj);
       // console.log(json)
        
        axios.post(process.env.REACT_APP_URL+"members.php",json).then(reply=>{
            if(reply.status==200)  {
                if(reply.data.status=="OK"){
                    alert("ok");
                }
                else    alert("Dikkat post mein h");
            }
            else    console.log(reply.status);
        })
            
    }
    let checkPass=()=>{
        SetpassCheck('none');
        if(document.getElementById("pass").value!=document.getElementById("repass").value)    SetpassCheck('block');
    }
    let checkmail=()=>{
        if(document.getElementById('email').value.trim=="") return;
        SetmailLoad("block");
        SetmailnotFound("none");
        axios.get(process.env.REACT_APP_URL+"checkmember.php?email="+document.getElementById('email').value).then(reply=>{
            if(reply.status==200){
                SetmailLoad("none");
                if(reply.data.status=="Yes")    SetmailnotFound("block");
            }
        })
    }
    let setSte=(ev)=>{
        let c=ev.target.value;
        axios.get(process.env.REACT_APP_URL+"states.php?isoname="+c).then(reply=>{
            if(reply.status==200)    setState(reply.data);
            else alert("State");
        })
    }
    let getCountry=()=>{
        axios.get(process.env.REACT_APP_URL+"countries.php").then(reply=>{
            if(reply.status==200)    setCtry(reply.data);
            else alert("country");
        })
    }
    useEffect(()=>{
        getCountry();
    },[]);
    return (
        <div>
            <div className="row">
            <div className="col-xxl-3 col-xl-3 xol-lg-3 col-md-2 col-sm-1 col-12"></div>
            <div className="col-xxl-6 col-xl-6 xol-lg-6 col-md-8 col-sm-10 col-12 m-2" >
                <br/>
                <div className="card-head bg-info text-center text-white "><h2> Enter Your Information</h2></div>
                <div className="card-body bg-light" style={{backgroundColor:"lightblue"}}>
                    <form onSubmit={f1}>
                        <div className="row m-1">
                        <div className="col-12 form-group"> 
                                <label> E.mail </label>
                                <input type="email" id="email" className="form-control form-control-sm" onBlur={checkmail}></input>
                            </div>
                            <div className="col-12">
                                <div style={{display:mailLoad}}>
                                <Box sx={{ width: '100%' }}><LinearProgress /> </Box>
                                </div>
                                <div style={{display:mailnotfound}}>
                                <Alert severity="error">Mail Already exist.</Alert>
                                <Alert variant="filled" severity="info">Try another mail or logIn from this mail</Alert>
                                </div>
                            </div>
                        <div className="col-6  form-group"> 
                            <label> Password</label>
                            <input type="password" id="pass" className="form-control form-control-sm"></input>
                        </div>
                        <div className="col-6  form-group " onBlur={checkPass}> 
                            <label> Re-Password</label>
                            <input type="password" id="repass" className="form-control form-control-sm"></input>
                        </div>
                        <div style={{display:passCheck}}>
                                <Alert severity="error">Password does't Match</Alert>   
                                </div>
                        <div className="col-6  form-group"> 
                            <label> Name</label>
                            <input type="text" id="name" className="form-control form-control-sm"></input>
                        </div>
                        <div className="col-6  form-group "> 
                            <label> Surname</label>
                            <input type="text" id="surname" className="form-control form-control-sm"></input>
                        </div>
                        <div className="col-12">
                            <label>Number</label>
                            <input type="tel" id="number" className="form-control form-control-sm"></input>
                        </div>
                        <div className="form-group col-12">
                                    <label>Address</label>
                                    <textarea id="txtAddress" className="form-control form-control-sm"  ></textarea>
                        </div>
                        <div className="form-group col-6">
                            <label>Country</label>
                            <select className="form-control form-control-sm" id="ctr" aria-placeholder="country" onChange={setSte} >
                                {ctry.map((e,i)=>
                                    <option value={e.isoname}>{e.cname} </option>
                                ) 
                            }
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label>State</label>
                            <select className="form-control form-control-sm"id="state" >
                            {state.map((e,i)=>
                                    <option value={e.isoname} >{e.sname} </option>
                                ) 
                            }   
                            </select>
                        </div>
                        <div className="form-group col-6">
                                    <label>City</label>
                                    <input type="text" id="txtCity" className="form-control form-control-sm" />
                             </div>
                            <div className="form-group col-6">
                                    <label>Pin Code</label>
                                    <input type="text" id="txtPin" className="form-control form-control-sm" />
                             </div>
                        </div>
                        &nbsp;&nbsp;&nbsp;<input type="submit" value="Register" className="btn btn-primary mt-2" />
                        <br/><br/>
                    </form>

                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 xol-lg-3 col-md-2 col-sm-1 col-12"></div>
            </div>
        </div>
    )
}