import React from 'react'

import Homepage from './HOME PAGE/Homepage.jsx'
import FirstPage from './FIRST PAGE/FirstPage.jsx'
import Loginpage from './LOGINPAGE/Loginpage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './DETAILS PAGE/SignUp.jsx';
import Protection from './PROTECTION/Protection.jsx';
// import Footer from './Footer.jsx';

function App() {
  return (
    <div>
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/Loginpage.jsx" element={<Loginpage/>} />
        <Route path="/SignUp.jsx" element={<SignUp/>} />
        <Route path="/Homepage.jsx" element ={<Protection/>}>
        <Route path="/Homepage.jsx" element={<Homepage/>} > </Route>
        </Route>

      </Routes>
      
      
    </BrowserRouter>
    </div>
  )
}

export default App
