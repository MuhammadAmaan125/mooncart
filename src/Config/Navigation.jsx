import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Hero from "../Components/Hero"
import Shop from '../Components/Shop/Shop'
import Blog from '../Components/Blogs/Blog'
import ContactUs from '../Components/Contact/ContactUs'
function Navigation() {
  return (
    <>
      <Routes>

<Route path='/' element={<Hero/>}></Route>
<Route path='/shop' element={<Shop/>}></Route>
<Route path='/blog' element={<Blog/>}></Route>
<Route path='/ContactUs' element={<ContactUs/>}></Route>

      </Routes>

    </>
  )
}

export default Navigation
