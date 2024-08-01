import { IoMdPerson } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function UserInfo()
{
    let items=useSelector((state)=>{return (state.bagCart)})
    return (
        <div className="action_bar">
        <div className="action_container">
            <span className="material-symbols-outlined action_icon"><IoMdPerson /></span>
            <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
            <span className="material-symbols-outlined action_icon"><FaHeart /></span>
            <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
            <span className="material-symbols-outlined action_icon"><GiShoppingBag /></span>
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{items.length}</span>
        </Link>
    </div> 
    )
}

export default UserInfo