import './App.css'
import ALL from './Components/Homepage/Home';
import Resturant from './Components/Resturantpage/Resturant';
import MyNavbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
   <BrowserRouter>
    <MyNavbar/>
     <Routes>
       <Route path='/all' element={<ALL/>} />
       <Route path='/' element={<Resturant/>} />
       
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
