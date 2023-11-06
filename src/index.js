import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

import './style.css'
import Home from './home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" />
      </Routes>
    </BrowserRouter>
  )
}

const dom = document.getElementById('app');
const root = createRoot(dom);

root.render(<App />);
