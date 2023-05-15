import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Concept from './components/Concept';
import Home from './components/Home';
import './App.css';
import Uv from './components/Products/Uv';
import Dust from './components/Products/Dust';
import Night from './components/Products/Night';
import Footer from './components/SocialMediaBar';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/concept" element={<Concept />}></Route>
        <Route path="/uv" element={<Uv />} />
        <Route path="/dust" element={<Dust />} />
        <Route path="/night" element={<Night />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
