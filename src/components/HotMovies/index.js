import { Link } from "react-router-dom"

// css
import "./index.css"

function HotMovies({ id, summary, coverImg, title, year }){
    return (
        <div className='hot-movie'>
            <Link to={`/knock_movie/movie/${id}`}>
                <div className="hot-movie-hover">
                    {summary.length > 200? summary.slice(0,199) + "..." : summary}
                </div>
                <img src={coverImg} alt={title}/>
                <div className="hot-movie-title">{title}</div>
                <div className="hot-movie-year">{year}</div>
            </Link>
        </div>
    )
}

export default HotMovies