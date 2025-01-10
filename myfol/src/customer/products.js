import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"
import { addInBasket ,UpdateInBasket} from "../action";
import { connect } from "react-redux";
function Products({commondata,addInBasket,UpdateInBasket}){
    let param=useParams();
    let [arr,setArr]=useState([]);
    useEffect(()=>{
        getProducts();
    },[]);
    function addProducts(id, price, idx) {
        let qty = document.getElementById("txt" + idx).value;
        if (qty == "") qty = 1;
        let arr=commondata.basket;
        for(let i=0;i<arr.length;i++){
            if(arr[i].pcode==id){
                UpdateInBasket({ pcode: id, qty: qty });
                return;
            }
        }
            addInBasket( {pcode: id, qty: qty });
         console.log("Current basket:", commondata.basket);
    }
    function getProducts(){
        let url="";
        if(param.id!=undefined) url=process.env.REACT_APP_URL+"products.php?cid="+param.id;
        else url=process.env.REACT_APP_URL+"products.php";
       //   else url="https://api.webroot.net.in/products.php";
        axios.get(url).then(reply=>{
            if(reply.status==200)   setArr(reply.data);
            else    alert(" error ");
           // console.log(arr);
        })
    }
    return (
        <div className="row light">
            {arr.map((e,i)=>
                    <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6 col-12 p-2">
                        <div className="p-3 text-center border shadow radious-3">
                            <img src={e.photo} className="w-50" /><br/>
                            {e.pname}<br/>
                            {e.details}<br/>
                            Rs {e.price}/-<br/>
                            Qty: <input type="number" placeholder="0" id={"txt"+i} style={{width:'50px',textAlign:'center'}} /><br/>
                            <button type="button" className="btn btn-primary btn-sm mt-3" onClick={()=>{addProducts(e.pid,e.price,i)}} >Add to Cart</button>
                        </div>
                    </div>                
                )}
        </div>
    )
}
let connectToStore=(state)=>({commondata:state});
let dispatchToStore=(dispatch)=>(
    {
        addInBasket:(value)=>dispatch(addInBasket(value)),
        UpdateInBasket:(value)=>dispatch(UpdateInBasket(value)),
    }
);
export default connect(connectToStore,dispatchToStore)(Products);