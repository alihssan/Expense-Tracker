export default function reducer(state,{type,st}){
    switch(type){
        case "ADD-VALUE":
            return state+st
        case "REMOVE-VALUE":
            return state+st
        default :
            return state
    }
}