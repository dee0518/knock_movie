import { Routes, Route } from "react-router-dom"
import { Home } from "../Path"

function AppRouter(){
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/cinema"} element={<Home/>}/>
            <Route path={"/event"} element={<Home/>}/>
            <Route path={"/contact"} element={<Home/>}/>
            <Route path={"/login"} element={<Home/>}/>
            <Route path={`/movie/:id`} element={<Home/>}/>
        </Routes>
    )
}

export default AppRouter