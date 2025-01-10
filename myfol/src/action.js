export let setLogin=(val)=>({type:"setLogin",value:val});
export let setProfile=(val)=>({type:"setProfile",value:val});
export let addInBasket=(val)=>({type:"addInBasket",pcode:val.pcode,qty:val.qty});
export let setTotal=(val)=>({type:"setTotal",value:val});
export let removeFromBasket=(pcode)=>({type:"removeFromBasket",pcode:pcode});
export let UpdateInBasket=(val)=>({type:"UpdateInBasket",pcode:val.pcode,qty:val.qty});