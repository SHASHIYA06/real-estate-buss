import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Apply from './pages/Apply'
import Compare from './pages/Compare'
import Admin from './pages/Admin'
import './styles.css'

function App(){
  return (
    <BrowserRouter>
      <header className="topbar">
        <div className="brand"><img src="/src/assets/logo.png" alt="logo" className="logo" /> <div><div className="title">ANDROMEDA</div><div className="subtitle">Loan Distribution</div></div></div>
        <nav><Link to="/">Home</Link><Link to="/apply">Apply</Link><Link to="/compare">Compare</Link><Link to="/admin">Admin</Link></nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/apply" element={<Apply/>} />
          <Route path="/compare" element={<Compare/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App/>)
