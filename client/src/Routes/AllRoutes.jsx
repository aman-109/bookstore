import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authentication from '../Pages/Authentication'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'


const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/auth' element={<Authentication/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes