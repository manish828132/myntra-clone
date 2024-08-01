import SearchBar from "./SearchBar"
import UserInfo from "./UserInfo"
import { Link } from "react-router-dom"

function Header()
{
    return (
<header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src='./images/myntra_logo.webp' alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <SearchBar></SearchBar>
        
        <UserInfo></UserInfo>
    </header>
    )
}

export default Header