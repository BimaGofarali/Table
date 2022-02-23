import React from 'react'
import {Routes, Route} from "react-router"
import Login from "../Page/Login"
import DetailPage from "../Componen/DetailPage"
function router() {
    return (
        <>
            <Routes>
                <Route exact path ="/"element={<Login/>}/>
                <Route exact path ="/detail"element={<DetailPage/>}/>

            </Routes>
        </>
    )
}

export default router
