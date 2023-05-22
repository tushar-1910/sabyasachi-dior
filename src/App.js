import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Concept from './components/Concept';
import Home from './components/Home';
import './App.css';
import Location from './components/Products/Location';
import Itinerary from './components/Products/Itinerary';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Concept" element={<Concept />}></Route>
        <Route path="/Location" element={<Location />} />
        <Route path="/Itinerary" element={<Itinerary />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
