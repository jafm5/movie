import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css"
import { Spinner } from "./Spinner";
import { useQuery } from "../Hooks/useQuery.jsx";

export function MoviesGrid() {
    const[movies, setMovies]= useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const query =useQuery();
    const search = query.get("search");
    console.log(search)

    useEffect(()=>{
        setIsLoading(true);
        const searchUrl = search 
        ?"/search/movie?query=" + search 
        :"/discover/movie"
        get(searchUrl).then((data) =>{
            setMovies(data.results);
            setIsLoading(false);
        });
    },[search]);

    if (isLoading){
        return <Spinner></Spinner>
    }
    return (
        <ul className={styles.movieGrid}>
            {movies.map((movie) => 
                <MovieCard key={movie.id} movie={movie}/>
            )}
        </ul>
    );
}