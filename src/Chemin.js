import React from 'react'
import { Routes, Route } from 'react-router-dom'  
import HomePage from './pages/HomePage'
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  

export default function Chemin() {
  return (
    <div>
      <Routes>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Routes>
    </div>
  )
}

