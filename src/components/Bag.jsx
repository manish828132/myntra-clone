import BagItem from "./BagItem"
import Bagsummary from "./Bagsummary"
import { useSelector } from "react-redux"



function Bag()
{
  let items=useSelector((state)=>{return (state.bagCart)})
  
    return (
        <>
        
    <main>
      <div className="bag-page">
        {items.map(function(item){
          return <BagItem item={item} key={item.id}></BagItem>
        })}
        
          
        
        
        
        
        
        
        
           
        

      </div>
      <Bagsummary></Bagsummary>
    </main>
   
        </>
    )
}

export default Bag