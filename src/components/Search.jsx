import styles from "./Search.module.css";
import {FaSearch} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useQuery } from "../Hooks/useQuery.jsx";

export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const history = useNavigate();
    const [searchText, setsearchText] = useState(null);

    useEffect(() => {
        setsearchText(search || "");
    }, [search]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        history("/?search=" + searchText);
    };
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput} 
                    type="text" 
                    value={searchText} 
                    onChange={(e) => setsearchText(e.target.value)}                     
                />
                <button className={styles.searchButton} type="submit">
                    <FaSearch size={20}/>
                </button>
            </div>
        </form>
    )
}