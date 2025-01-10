import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Home(){
    let [arr,setArr]=useState([]);
    function getCategery(){
            axios.get(process.env.REACT_APP_URL+"categories.php").then(reply=>{
                
                if(reply.status==200) {
                    setArr(reply.data);
                }
                else{
                    alert("Something Wrong Happend")
                }

            })
    }
    useEffect(()=>{
            getCategery()
    },[]);
    return (
        <div className="row p-4">
        {arr.map((e,i)=>
        <div  className="col-xl-4 col-lg-3 col-md-6 col-sm-6 col-12 p-2 p-3 text-center border shadow radious-3 ">
            <img src={e.photo} className="w-50" /><br/>
                {e.name}<br/>
                {e.details}<br/>
            <Link   className="btn btn-danger" to={"/products/"+e.cid}>More products</Link>
        </div>
        )}

        </div>
    )
}