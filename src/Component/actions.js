function Add_Value(st){
    return{
        type:"ADD-VALUE",
        st,
    }
}
function Remove_Value(st){
   return{
       type:"REMOVE-VALUE",
       st,
   }
}
export default function Combine_Action(st){
   if(st>=0){
       return Add_Value(st)
   }
   else if(st<0){
       return Remove_Value(st)
   }
}