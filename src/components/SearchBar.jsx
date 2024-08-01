import { FaSearch } from "react-icons/fa";


function SearchBar()
{
    return (<div className="search_bar">
    <span className="material-symbols-outlined search_icon"><FaSearch /></span>
    <input className="search_input" placeholder="Search for products, brands"/>
</div>)
}

export default SearchBar