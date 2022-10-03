import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/*import Ingredients from './Ingredients';
import Counter from './Counter'
import MyApp from './Counter'
import CounterInd from './CounterInd';
import TitleRow from './App'; */
import Heading from './components/Heading';
import ShoppingList from './components/ShoppingList';
import ListRecipes from './components/ListRecipes'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/*<ButtonIngr />
    <Ingredients />
    <CounterInd />
    
    <CounterInd />
    <MyApp />*/}
    <Heading />
    <App />
    <ShoppingList />
    <ListRecipes />
  </React.StrictMode>
);


