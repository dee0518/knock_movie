import { Routes, Route } from "react-router-dom"
import { Home } from "../Path"

function AppRouter(){
    return (
        <Routes>
            <Route path={"/knock_movie/"} element={<Home/>}/>
            <Route path={"/knock_movie/cinema"} element={<Home/>}/>
            <Route path={"/knock_movie/event"} element={<Home/>}/>
            <Route path={"/knock_movie/contact"} element={<Home/>}/>
            <Route path={"/knock_movie/login"} element={<Home/>}/>
            <Route path={`/knock_movie/movie/:id`} element={<Home/>}/>
        </Routes>
    )
}

export default AppRouter