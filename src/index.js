import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/NavBar"
import App from './App';
import Heading from './components/Heading';
import ShoppingList from './components/ShoppingList';
import ListRecipes from './components/ListRecipes'
import Panel from './components/Panel';
import Form from './components/ChangingRecipes';
import CurrentDate from './components/CurrentDate';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  
  <CurrentDate />
   
  </React.StrictMode>
);


