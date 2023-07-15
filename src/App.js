import React, {useState} from "react";
import {Routes, Route, useLocation} from "react-router-dom";
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
import LoginPopup from "./components/Profile/Login/LoginPopup";



function App() {

    const [basketPopupOpen, setBasketPopupOpen] = useState(false)
    const [loginPopupOpen, setLoginPopupOpen] = useState(false)
    const location = useLocation()

  return (
          <div className="wrapper">
                  <Header setBasketPopupOpen={setBasketPopupOpen} setLoginPopupOpen={setLoginPopupOpen}/>
              {location.pathname !== '/Checkout/' && <div className={basketPopupOpen ? `${style.overlay} ${style.overlayVisible}` : style.overlay}>
                  <Basket setBasketPopupOpen={setBasketPopupOpen}/>
              </div>}
              <LoginPopup loginPopupOpen={loginPopupOpen} setLoginPopupOpen={setLoginPopupOpen}/>
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
