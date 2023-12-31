import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Profile from './pages/Profile'

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
}
