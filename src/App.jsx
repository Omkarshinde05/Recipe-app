import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainpage from './assets/Component/Mainpage'
import { Route, Routes } from 'react-router-dom'
import HomePage from './assets/Component/HomePage'
import Mealinfo from './assets/Component/Mealinfo'
import Navbar from './assets/Component/Navbar'
import { Fav, FavProvider } from './assets/Component/Addtofav'
import Signin from './assets/Component/SignPage'
import About from './assets/Component/About'
import Contact from './assets/Component/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FavProvider>
     <Navbar />
    
      <Routes>
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
