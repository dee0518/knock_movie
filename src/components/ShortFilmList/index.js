// css
import "./index.css"

function FilmItem({ link, preview, title, onClick }){
    const onClickA = (event) => {
        event.preventDefault()
        onClick(link)
    }
    return (
        <a className="film-item" href={link} onClick={onClickA}>
            <div style={{backgroundImage: `url(${preview})`}}></div>
            <div>{title}</div>
        </a>
    )
}

function ShortFilmList({ list, onChangeIframSrc, onClickUpDownBtn }){
    const onClick = (link) => {
        onChangeIframSrc(link)
    }

    return (
        <div className="short-film-list">
            <button onClick={() => onClickUpDownBtn(-1)}>prev</button>
            <div className="list-unit">
                {
                    list.map((item,index) => (
                        <FilmItem
                            key={'film' + index}
                            link={item.link}
                            preview={item.preview}
                            title={item.title}
                            onClick={onClick}
                        />
                    ))
                }
            </div>
            <button onClick={() => onClickUpDownBtn(1)}>next</button>
        </div>
    )
}

export default ShortFilmList