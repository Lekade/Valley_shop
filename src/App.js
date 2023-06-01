import React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Selection from "./components/Selection/Selection";
import Checkout from "./components/Сheckout/Сheckout";
import Favorites from "./components/Favorites/Favorites";
import StartPage from "./components/StartPage/StartPage";



function App() {

  return (
          <div className="wrapper">
                  <Header/>
                  <main className="main">
                    <Routes>
                        <Route path='/*'  element={
                            <StartPage/> }/>
                        <Route path='/Category/*'  element={
                            <Selection/> }/>
                        <Route path='/Favorites/*'  element={
                            <Favorites/> }/>
                        <Route path='/Checkout/*'  element={
                            <Checkout/> }/>
                    </Routes>
                  </main>
                  <Footer/>
          </div>
  )
}

export default App;
