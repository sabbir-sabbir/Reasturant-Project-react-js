import './App.css'
import ALL from './Components/Homepage/Home';
import Resturant from './Components/Resturantpage/Resturant';
import MyNavbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Resturantpage/Footer';
import {useState} from 'react'

function App() {
  const [inputValue, setInputValue] = useState("")
  const getData = (e)=> {
    setInputValue(e.target.value.trim())
  
  };


  return (
    <>
   <BrowserRouter>
    <MyNavbar getData={getData} />
     <Routes>
       <Route path='/all' element={<ALL inputValue={inputValue} />} />
       <Route path='/' element={<Resturant/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
