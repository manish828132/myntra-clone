import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux";
import { addItems } from "../store/itemSlice";
import { markFetchDone } from "../store/fetchStatusSlice";

function DataFetch()
{
    let {fetchDone}=useSelector((state)=>(state.fetchStatus))
    const dispatch=useDispatch();
    useEffect(function(){

        if(!fetchDone){
            fetch('http://localhost:8080/items').then((res)=>res.json()).then((data)=>{
                let {items}=data;
                dispatch(addItems(items))
                dispatch(markFetchDone())
    
            })
        }
        

    },[fetchDone])

}

export default DataFetch


