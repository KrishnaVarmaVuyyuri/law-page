import { configureStore, createSlice } from "@reduxjs/toolkit";
let state = {
    name:'',
    phone:'',
    balance:0
}
let tranState = []
let userSlice = createSlice({
    name:'user',
    initialState:state,
    reducers:{
        updateName:(state,action)=>{
            state.name=action.payload
        },
        updatePhone:(state,action)=>{
            state.phone = action.payload
        },
        withdraw:(state,action)=>{
            state.balance=state.balance - action.payload
        },
        deposit:(state,action)=>{
            state.balance=state.balance+ +action.payload
        }
    }

})

let transcationSlice = createSlice({
    name:'trans',
    initialState:tranState,
    reducers:
    {
        addTrans:(state,action)=>{
            state.push(action.payload)
        }
    }
})



console.log(userSlice)
console.log(tranState)
let store = configureStore({
    reducer:{
        'user':userSlice.reducer,
        'trans':transcationSlice.reducer
    }
})
export default store
export const {deposit,withdraw,updateName,updatePhone}=userSlice.actions
export const {addTrans}=transcationSlice.actions