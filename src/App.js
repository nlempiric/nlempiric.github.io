import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Homepage from './pages/Homepage';
import './App.css'
import Aboutpage from './pages/Aboutpage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
