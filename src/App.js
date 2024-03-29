import React from 'react';

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';



function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
