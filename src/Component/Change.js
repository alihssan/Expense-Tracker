import React,{useReducer,useState} from 'react'
import Data from './Data'
import Price from './Price'
import History from './History'
import Combine_Action from './actions'
import reducer from './Reducer'
 function handleTransaction(st,dispatch,sethistory,setincome,setexpense,Income,Expense,text){
     st=parseInt(st);
    if(st>=0){
        setincome(Income+st)
    }
    else if(st<0){
        setexpense(Expense+st)
    }
    sethistory(prev=>prev.concat({value:st,text:text}))
    dispatch(Combine_Action(parseInt(st)))

 }
 const Change=()=>{
    const [state,dispatch]=useReducer(reducer,0);
    const [st,setst]=useState(0);
    const [Income,setincome]=useState(0);
    const [Expense,setexpense]=useState(0);
    const [history,sethistory]=useState([]);
    const [text,settext]=useState("");
    const data={state:state,history:history}
    return(
        <Data.Provider value={data}>
            <Price/>

            <div className="top">
                <div className="in" ><h1>Expense</h1><h1>{`${Expense} $`}</h1></div>
               <div className="exp"><h1>Income</h1><h1>{`${Income} $`}</h1></div>

            </div>
            <History/>
            <p className="head">Text</p>
            <input className="field" type="text" value={text} onChange={(e)=>settext(e.target.value)} />
            <p className="head">Value</p>
            <input className="field" type="number" value={st} onChange={(e)=>setst(e.target.value)}/><br/>
            <button  className="btn" onClick={(e)=>handleTransaction(st,dispatch,sethistory,setincome,setexpense,Income,Expense,text)}>Add Transaction</button>
        </Data.Provider>
        
    )
}
export default Change;