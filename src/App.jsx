import { useState } from 'react'
import './App.css'
import './index.css'
import Mainpage from './Component/Mainpage'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './Component/HomePage'
import Mealinfo from './Component/Mealinfo'
import Navbar from './Component/Navbar'
import { Fav, FavProvider } from './Component/Addtofav'
import Signin from './Component/SignPage'
import About from './Component/About'
import Contact from './Component/Contact'
import Mealcard from './Component/Mealcard'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <FavProvider>
     <Navbar />
    
      <Routes>
        <Route path='Food-Recipe-App' element={<Mainpage />}/>
        <Route path='/' element={<Mainpage />} />
        <Route path='/:mealid'  element={<Mealinfo />}/>
        <Route path='/favorites' element={<Fav/>}/>
        <Route path='/signpage'   element={<Signin />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        
      </Routes>
      </FavProvider>
    </>
  )
}

export default App
