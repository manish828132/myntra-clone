import { createSlice } from "@reduxjs/toolkit";



const bagSlice=createSlice(
    {
      name:"bagCart"  ,
      initialState:[],
      reducers:{
        addBagItems:(state,action)=>{
          
          state.push(action.payload)

        },
        removeItems:(state,action)=>{
            return state=state.filter(function(item){
                return item.id!=action.payload
            })
        }

      }
    }
)

export const {addBagItems,removeItems}=bagSlice.actions
export default bagSlice