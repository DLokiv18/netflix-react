import "./nav.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Link } from "react-router-dom";
function Nav(){
    return(
        <>
        <div className="nav_bar">
            <div className="Logo_bar">
                <img className="image_navbar" src="/images/netflix1.jpg" alt="" />
            </div>
            <div className="Items_bar">
                <ul type="none" className="ul_nav">
                    <li><Link className="nav_a" to="/home">Home</Link></li>
                    <li><Link className="nav_a" to="/shows">Shows</Link></li>
                    <li><Link className="nav_a" to="/movies">Movies</Link></li>
                    <li><Link className="nav_a" to="/my">My List</Link></li>
                    

                </ul>
            </div>
            <div className="Search_bar">
                <SearchIcon></SearchIcon>
                <NotificationsNoneIcon></NotificationsNoneIcon>
                <PeopleOutlineIcon></PeopleOutlineIcon>
            </div>

        </div>
        </>
    )
}
export default Nav