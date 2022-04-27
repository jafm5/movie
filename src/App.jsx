import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./components/App.module.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
    return (
        <Router>
            <header>
                <Link to="/">
                  <h1 className={styles.title}>Movies</h1>
                </Link> 

            </header>
            <main>
                <Routes>
                    <Route exact path="/movie/:movieId" element={<MovieDetails/>} />
                    <Route path="/" element={<LandingPage/>} />
                </Routes>
            </main>
        </Router>
    );
}