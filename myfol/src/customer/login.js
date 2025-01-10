import axios from "axios";
import { setLogin, setProfile } from "../action";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Alert from '@mui/material/Alert';
import { useState } from "react";
function Login({commondata,setLogin,setProfile}){
    let nav=useNavigate();
    let [check,setCheck]=useState("none");
    
    function login(){
            let id=document.getElementById('t1').value.trim();
            let pass=document.getElementById('t2').value.trim();
            setCheck("none");
            axios.get(process.env.REACT_APP_URL+"members.php?email="+id+"&upass="+pass).then(reply=>{
                if(reply.status==200){
                    if(reply.data.status==undefined)
                        {
                            setLogin("Y");
                            setProfile(reply.data);
                            nav("/");
                        }
                        else
                        {
                        setCheck("Block")           
                        }
                }
            })
    }
    return (
        
        <div className="bg-light">
            <br/><br/><br/>
                    <div className="row">
            
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12"></div>
            <div className=" card col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="card-header h5 text-center bg-info text-white"> USER AUTHENTICATION</div>
                <div className="card-body "> 
                <div className="form-group">
                        <label>Login Id</label>
                        <input type="text" id="t1"  className="form-control" placeholder="abc@login.com"></input>
                    </div>
                    
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" id="t2"  className="form-control" placeholder="######"></input>
                    </div>
                    <br/>   
                    <input type="checkbox"/> Remember mee<br/>
                    <hr/>   
                    <div style={{display:check}}>
                        <div>
                            <Alert severity="error">Your Id or password is Wrong. please check and retry</Alert>
                        </div>
                    </div>
                    <input type="button" className="btn btn-primary" value="logIn!" onClick={login}/>
                    <br/>
                    
             </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12"></div>

        </div>
        <br/><br/><br/>
        </div>
    )
};
let connectToStore=(state)=>({commondata:state});
let dispatchToStore=(dispatch)=>(
    {
        setLogin:(value)=>dispatch(setLogin(value)),
        setProfile:(value)=>dispatch(setProfile(value))
    }
);
export default connect(connectToStore,dispatchToStore)(Login);