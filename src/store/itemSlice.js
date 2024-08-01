import {createSlice} from '@reduxjs/toolkit';

//import { items } from '../data/items';

const itemSlice=createSlice({
    name:'items',
    initialState:[],
    reducers:{
        addItems:(state,action)=>{
            return (action.payload[0])
        }
    }

})

export const {addItems}=itemSlice.actions
export {itemSlice}