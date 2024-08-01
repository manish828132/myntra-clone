import {configureStore,createSlice} from '@reduxjs/toolkit';

import { itemSlice } from './itemSlice';
import { fetchStatusSlice } from './fetchStatusSlice';

import bagSlice from './bagSlice';




const store=configureStore({
    reducer:{
        items:itemSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
        bagCart:bagSlice.reducer

    }
        
})



export default store