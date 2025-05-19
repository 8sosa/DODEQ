import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import StyleIt from './Pages/StyleIt'
import Writeit from './Pages/Writeit'
import Engineer from './Pages/Engineer'
import Living from './Pages/Living'
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
                            <Route path='/yvie-write-it' element={<Writeit />} exact/>
                            <Route path='/yvie-is-an-engineer' element={<Engineer />} exact/>
                            <Route path='/yvies-just-living' element={<Living />} exact/>
                            <Route path='/shop' element={<Shop />} exact/>
                        </Routes>
                    </div>
                <Footer />
            </div>
        </Router>
    )
}