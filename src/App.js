import React from 'react';

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';



function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Layout />} />
    </Routes>
  );
}

export default App;
