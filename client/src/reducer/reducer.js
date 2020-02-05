
const initialState={
   users:[]
}


const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case "GET-USERS":
            return {...state, users:action.payload}
            default:
             return state
    }
}
export default Reducer