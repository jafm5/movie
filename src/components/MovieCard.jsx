import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css"
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({movie}){
    const imageUrl = getMovieImg(movie.poster_path, 300);
 /*    const imageUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w300" + movie.poster_path 
    : placeholder; */
    return (
        <li className={styles.movies}>
            <Link  to={"/movie/"+ movie.id}>
                <img 
                    width={230}
                    height={345}
                    className={styles.moviImage} 
                    src={imageUrl} 
                    alt={movie.title}>                    
                </img>
                <div>{movie.title}</div>
            </Link>
        </li>
    );
}