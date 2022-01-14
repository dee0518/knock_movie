import { Link } from "react-router-dom"
import { image } from "../../assets/ImportImage"

// css
import "./index.css"

function Header({ isLoggedIn }){
    return (
        <header>
            <div className="header-inner">
                <ul>
                    <li>
                        <h1>
                            <Link to={"/"}>
                                <img src={image['logo.svg']} alt="knock movie"/>
                            </Link>
                        </h1>
                    </li>
                    <li>
                        <Link to={"/"}>home</Link>
                    </li>
                    <li>
                        <Link to={"/cinema"}>cinema</Link>
                    </li>
                    <li>
                        <Link to={"/event"}>event</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>contact</Link>
                    </li>
                </ul>
                <div>
                    {isLoggedIn? <Link className="signiture-btn" to={"/myKnock"}>My Knock</Link> : <Link className="signiture-btn login" to={"/login"}>Login</Link>}
                </div>
            </div>
        </header>
    )
}

export default Header