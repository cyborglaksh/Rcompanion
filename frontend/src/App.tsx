import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Room } from './components/Room';
import { Landing } from './components/Landing';

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/room" element={<Room />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
