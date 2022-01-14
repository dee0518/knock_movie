import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { image } from "../../assets/ImportImage"
import { HotMovies, ShortFilmList } from "../../Path"
import FilmList from "./FilmList"

// css
import "./index.css"

function Home(){
    const [loading, setLoading] = useState(true)
    const [movies,setMovies] = useState([])
    const [filmScroll,setFilmScroll] = useState(0)
    const [iframeSrc, setIframeSrc] = useState("https://www.youtube.com/embed/Ko2NWhXI9e8") 
    const shortFilmList = FilmList

    const getMovies = async () => {
        const json = await (
        await fetch(
        `https://yts.mx/api/v2/list_movies.json?sort_by=like_count&limit=20`
        )).json()

        setMovies(json.data.movies)
        setLoading(false)    
    }

    useEffect(() => {
        getMovies()
    },[])

    const onChangeIframSrc = (link) => setIframeSrc(link)
    const onClickUpDownBtn = (num) => {
        setFilmScroll(filmScroll + num)
    }

    useEffect(() => {
        const filmListUnit = document.querySelector(".list-unit")
        if(filmListUnit){
            
            filmListUnit.scrollTop = filmScroll * 80 + 'px'
        }
    },[filmScroll])

    return (
        <div className="home">
           {loading? (
               <div className="visual loading" style={{
                height: window.innerHeight
            }}>
                 <div className="opacity-wrap"></div>
                 <div className="content-inner">
                     <div>
                         <div className="genres">
                             <div></div>
                             <div>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                             </div>
                         </div>
                         <div className="title"></div>
                         <button className="signiture-btn"></button>
                     </div>
                     <button disabled={true}></button>
                 </div>
             </div>
           ) : (
            <>
              <button className="chatbot-btn">
                 <img src={image['chatbot_btn.svg']} alt="chatbot"/>
             </button>
             <div className="visual" style={{
                height: window.innerHeight,
                backgroundImage: `url(${movies[0].large_cover_image})`
            }}>
                 <div className="opacity-wrap"></div>
                 <div className="content-inner">
                     <div>
                         <div className="genres">
                             <div>Genres</div>
                             <div>
                                {
                                    movies[0].genres.map((item,index) => (
                                        <span key={index}>{item}</span>
                                    ))
                                }
                             </div>
                         </div>
                         <div className="title">{movies[0].title}</div>
                         <button className="signiture-btn">Book Now</button>
                     </div>
                     <button>
                         <img src={image['arrow.svg']} alt="arrow"/>
                     </button>
                 </div>
             </div>
             <section className="hot-movies">
                 <div className="content-inner">
                     <h2 className="title">Hot Movies</h2>
                     <div className="contents">
                        {
                            movies.map(item => (
                                <HotMovies
                                    key={item.id}
                                    id={item.id}
                                    summary={item.summary}
                                    coverImg={item.large_cover_image}
                                    title={item.title}
                                    year={item.year}
                                />
                            ))
                        }
                     </div>
                 </div>
             </section>
             <section className="short-films">
                 <div className="content-inner">
                     <h2 className="title">Short Films</h2>
                     <div className="contents">
                        <div className="iframe-wrapper">
                            <iframe src={iframeSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <ShortFilmList
                            list={shortFilmList}
                            onChangeIframSrc={onChangeIframSrc}
                            onClickUpDownBtn={onClickUpDownBtn}
                        />
                     </div>
                 </div>
             </section>
             <section className="event">
                 <div className="content-inner">
                     <h2 className="title">It's one of my all time Favorites!</h2>
                     <div className="contents">
                         <div>
                             <p>Do you have your best movies?<br/>
                             You’re posted a movie you favorites in your instargram.<br/>
                             We will randomly give movie tickets to 20 people.<br/>
                             Please participate in this event! Enjoy Your Movie!</p>
                             <Link className="signiture-btn" to="/knock_movie/event">view more</Link>
                         </div>
                         <div>
                         <div className="img-photo"></div>
                         <div className="img-photo"></div>
                         <div className="img-photo"></div>
                         </div>
                     </div>
                 </div>
             </section>
            </>
        )}
        </div>
    )
}

export default Home