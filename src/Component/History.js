import React,{useContext} from 'react'
import Data from './Data'

const History=()=>{
    const context=useContext(Data)
    let history=context.history;
    console.log(history)
   
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
            <p className="blo" key={val.text}>{val.text}</p>
            <p className="blo2" key={val.value}>{val.value}</p>

        </div>
            
        )
        }
        </div>
    )
}
export default History;