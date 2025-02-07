import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import StyleIt from './Pages/StyleIt'
import Shop from './Pages/Shop'

export default function SuaRoutes() {
    return (
        <Router>
            <div className="wrapper">
                <Navbar />
                    <div className="content">
                        <Routes>
                            <Route path='/' element={<Home />} exact/>
                            <Route path='/yvie-style-it' element={<StyleIt />} exact/>
                            <Route path='/shop' element={<Shop />} exact/>
                        </Routes>
                    </div>
                <Footer />
            </div>
        </Router>
    )
}