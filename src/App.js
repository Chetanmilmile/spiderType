import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import UserPage from './Pages/UserPage';
import HelpPage from './Pages/HelpPage';
import AboutPage from './Pages/AboutPage';


function App() {

  
  return (
    <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path='/user' element={<UserPage/>}/>
        <Route path='/term' element ={<HelpPage/>}/>
        <Route path='/about' element ={<AboutPage/>}/>
    </Routes>
  );
}

export default App;
