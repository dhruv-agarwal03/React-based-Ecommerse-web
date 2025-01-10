let stat={isLogin:"N",profile:{},basket:[],total:0};
/*address:"A3 ,Krishan vatika, punjabi pura, meerut\nA3 ,Krishan vatika, punjabi pura, meerut"
city:"MEERUT (3011)"
country:"AF"
email:"dhrutest@gmail.com"
fname:"DHRUV"
lname:"AGARWAL"
mobile:"9638527415"
pincode:"250002"
state:""
upass:"hell"*/
export function appReducer(state=stat,action){
         if(action.type=="setLogin") {
            state.isLogin=action.value;
            return{...state};
         }

         else if(action.type=="addInBasket")  {
            let arr=[...state.basket];
            arr.push({pcode:action.pcode,qty:action.qty});
            return{...state,basket:arr};
        }
        else if(action.type=="setProfile"){
            
            return {...state,profile:action.value};
        }    
        else if(action.type=="removeFromBasket"){
            let arr=[...state.basket];
            let idx=-1;
            for(let i=0;i<arr.length;i++){
                if(arr[i].pcode==action.pcode)  {
                    idx=i;
                    break;
                }
            }
            if(idx>0){
                arr.splice(idx,1);
            }
            return {...action,basket:arr};
        }
        else if(action.type=="UpdateInBasket"){
            let arr=[...state.basket];
            let idx=-1;
            for(let i=0;i<arr.length;i++){
                if(arr[i].pcode==action.pcode){
                    idx=i;
                    break;
                }
            }
            if(idx>0){
                arr.splice(idx,1,{pcode:action.pcode,qty:action.qty});
            }
            return {...action,basket:arr};
        }
        else if(action.type=='setTotal')
            {
                return {...state,total:parseInt(state.total)+parseInt(action.value)}
            }
        else
                return state;
}