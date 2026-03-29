import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import QuestionarioPage from './pages/QuestionarioPage'
import PerfilPage from './pages/PerfilPage'
import './styles/Globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/questionario" element={<QuestionarioPage />} />
        <Route path="/perfil/:id" element={<PerfilPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

