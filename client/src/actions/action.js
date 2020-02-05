import axios from "axios"
//get
export const getUsers=()=>dispatch=>{
    axios.get('/users')
    .then(res=>dispatch({type:"GET-USERS",payload:res.data}))
    .catch(err=>console.log('err'))
}
//add user
export const addUser=(newUser)=>dispatch=>{
    axios.post('/users',newUser)
    .then(res=>dispatch(getUsers()))
    .catch(err=>console.log('err'))
}
//edit user
export const editUser=(id, updateUser)=>dispatch=>{
    axios.put(`/users/${id}`,updateUser)
    .then(res=>dispatch(getUsers()))
    .catch(err=>console.log('err'))
}
//delete user
export const deleteUser=(id)=>dispatch=>{
    axios.delete(`/users/${id}`)
    .then(res=>dispatch(getUsers()))
    .catch(err=>console.log('err'))
}
