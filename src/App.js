import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Selection from "./components/Selection/Selection";
import Checkout from "./components/Сheckout/Сheckout";
import Favorites from "./components/Favorites/Favorites";
import StartPage from "./components/StartPage/StartPage";
import ProductPage from "./components/ProductPage/ProductPage";
import Profile from "./components/Profile/Profile";
import Basket from "./components/Сheckout/Basket";
import style from "./components/Сheckout/Сheckout.module.css"



function App() {

    const [popupOpen, setPopupOpen] = useState(false)

  return (
          <div className="wrapper">
                  <Header setPopupOpen={setPopupOpen}/>
                  <div className={popupOpen ? `${style.overlay} ${style.overlayVisible}` : style.overlay}>
                      <Basket popupOpen={popupOpen} setPopupOpen={setPopupOpen}/>
                  </div>
                  <main className="main">
                    <Routes>
                        <Route path='/*'  element={
                            <StartPage/> }/>
                        <Route path='/Category/*'  element={
                            <Selection/> }/>
                        <Route path='/Product/:id'  element={
                            <ProductPage/> }/>
                        <Route path='/Profile/*'  element={
                            <Profile/> }/>
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
