import React,{useContext} from 'react'
import Data from './Data'


const Price=()=>{
    const context=useContext(Data)
    return(
        <React.Fragment>
            <h1 style={{fontSize:"20px",fontWeight:"500",color:"#ccc"}}>Your Balance</h1>
            <div>
            <h1 style={{fontSize:"40px",marginTop:"-15px",fontWeight:"500"}}>{`${context.state} $`}</h1>
            

            
            </div>
            
        

        </React.Fragment>
                
            
    )
}
export default Price;