//import css here

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
