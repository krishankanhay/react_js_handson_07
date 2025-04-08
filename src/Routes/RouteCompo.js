import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Student from '../Components/Student'
import Contact from '../Components/Contact'
import NotFound from '../Components/NotFound'

const RouteCompo = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/student' element={
                        
                        <Student />
                    } />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteCompo
