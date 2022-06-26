import React from 'react'
import { Routes, Route } from "react-router-dom";
import CharactersDetails from '../components/CharactersDetails/CharactersDetails';

import Home from '../components/Home/Home';


const RoutesComponents = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/character/:name" element={<CharactersDetails />} />
  </Routes>
)

export default RoutesComponents
