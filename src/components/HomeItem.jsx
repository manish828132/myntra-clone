import { useDispatch } from "react-redux"
import { addBagItems } from "../store/bagSlice"
import { useSelector } from "react-redux";
import { removeItems } from "../store/bagSlice"



function HomeItem({item})
{
    let dispatch=useDispatch();
    let bagItems=useSelector((state)=>{return (state.bagCart)})
   
  
    return (
        <div className="item-container" >
            <img className="item-image" src={item.image} alt="item"/>
            <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">{item.discount_percentage}% OFF</span>
            </div>
            {bagItems.includes(item)?<button type="button" className="btn btn-primary btn-add-bag" onClick={()=>{dispatch(removeItems(item.id))}}>Remove From Cart</button>:<button className="btn-add-bag" onClick={()=>{dispatch(addBagItems(item))}}>Add to Bag</button>}
            

            
      </div>)
}

export default HomeItem