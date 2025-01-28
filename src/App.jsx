import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar/NavBar' 
import Search from './components/search/Search' 


function App() {
  return (
          <div className='App'>
            <NavBar />
            <br />
            <Search />
          </div>
        );
}

export default App
