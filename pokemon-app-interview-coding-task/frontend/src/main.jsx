import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import CatchList from './pages/CatchList.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <StrictMode>
          <App />
        </StrictMode>} />
        <Route path='catchList' element={<CatchList />} />
    </Routes>
  </BrowserRouter>
)
