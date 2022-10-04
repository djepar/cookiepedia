import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Heading from './components/Heading';
import ShoppingList from './components/ShoppingList';
import ListRecipes from './components/ListRecipes'
import Panel from './components/Panel';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   
    <Heading />
    <Panel title="More content">
      <ShoppingList />
      <App />
      <ListRecipes />   
      
    </Panel>
  
   
  </React.StrictMode>
);


