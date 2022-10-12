import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>

  </React.StrictMode>
);


