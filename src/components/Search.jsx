import styles from "./Search.module.css";
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useQuery } from "../Hooks/useQuery.jsx";

export function Search() {
    const query = useQuery();
    const search = query.get("search");
    const history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();  
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput} 
                    type="text" 
                    value={search} 
                    placeholder="Title"
                    aria-label="Search Movies"
                    onChange={(e) => {
                        const value = e.target.value;
                        history("/?search=" + value);
                    }}                     
                />
                    <FaSearch color="black" size={20} className={styles.searchButton}/>
            </div>
        </form>
    )
}
