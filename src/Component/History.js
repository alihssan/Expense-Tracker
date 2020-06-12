import React,{useContext} from 'react'
import Data from './Data'
import {Combine_Action} from './actions'

const handleClear=(sethistory,val,setIncome,setExpense,setst,dispatch)=>{
    sethistory(prev=>prev.filter(i=>i.value!==val.value))
    if(val.value>=0){
    setIncome(prev=>prev-val.value)
    setst(prev=>prev-val.value)
    dispatch(Combine_Action(-val.value))
}
    else if(val.value<0){
    setExpense(prev=>prev-val.value)
    setst(prev=>prev-val.value)
    dispatch(Combine_Action(-val.value))


}

    
}
const History=()=>{
    const context=useContext(Data)
    let history=context.history;
    const sethistory=context.sethistory;
    const setIncome=context.income;
    const setExpense=context.expense;
    const setst=context.setst;
    const dispatch=context.dispatch;
    return(
        <div className="history_cont">
            <h1>History</h1>
        { history.map(val=>
        <div className="his" style={{
            border: "0.1px solid #ccc",
            borderRight: val.value>=0 ? "5px solid green" : "5px solid red",
            width: "98%",
            height: "50px",
            backgroundColor: "white",
            boxShadow: "2px 2px 2px grey",
        }}>
            <button style={{marginTop:"15px",marginLeft:"10px",backgroundColor:val.value>=0 ?"green" : "red"}} onClick={()=>handleClear(sethistory,val,setIncome,setExpense,setst,dispatch)}>X</button>
            <p className="blo" key={val.text}>{val.text}</p>
            <p className="blo2" key={val.value}>{val.value}</p>

        </div>
            
        )
        }
        </div>
    )
}
export default History;