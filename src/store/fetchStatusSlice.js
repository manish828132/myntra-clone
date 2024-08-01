import {createSlice} from '@reduxjs/toolkit';

import { items } from '../data/items';

const fetchStatusSlice=createSlice({
    name:'fetchstatus',
    initialState:{
        fetchDone:false,
        currentlyFetching:false
    },
    reducers:{
        markFetchDone:(state,action)=>{
             state.fetchDone=true;
        },
        markFetchingStarted:(state,action)=>{
            return state.currentlyFetching=true
        },
        markFetchingFinished:(state,action)=>{
            return state.currentlyFetching=true
        }
    }

})

export const {markFetchDone,markFetchingStarted,markFetchingFinished}=fetchStatusSlice.actions
export {fetchStatusSlice}