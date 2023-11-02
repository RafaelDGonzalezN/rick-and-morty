import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import {Link, useLocation} from "react-router-dom"

const Nav = (props) => {

const {onSearch, onLogout} = props;


    return (
        <div className={styles.nav}>
          
            <Link to = {"/about"}>
                <button>About</button>
            </Link>
            
            <Link to = {"/home"}>
                <button>Home</button>
            </Link>

            <Link to = {"/favorites"}>
                <button>Favorites</button>
            </Link>

                <button onClick={onLogout}>Log out</button>

            <SearchBar onSearch={onSearch}/>
        </div>
         );
}

export default Nav;