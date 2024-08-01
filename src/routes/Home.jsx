import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux"


   
    

function Home()
{
    let  items=useSelector((state)=>state.items)
   
    

    return (
        <main>
        <div className="items-container">
            {items.map(function(item){
                return <HomeItem item={item} key={item.id}></HomeItem>
            })}
          
        </div>
    </main>

    )
}

export default Home;