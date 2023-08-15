import React, {useState, lazy, Suspense} from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";

import Selection from "./components/Selection/Selection";
import StartPage from "./components/StartPage/StartPage";
import style from "./components/Сheckout/Сheckout.module.css"
import LoginPopup from "./components/Profile/Login/LoginPopup";
import {useResize} from "./useResize";

const ProductPage = lazy(() => import(/* webpackChunkName: "ProductPage" */ "./components/ProductPage/ProductPage"))
const Profile = lazy(() => import(/* webpackChunkName: "Profile" */ "./components/Profile/Profile"))
const Favorites = lazy(() => import(/* webpackChunkName: " Favorites" */ "./components/Favorites/Favorites"))
const Checkout = lazy(() => import(/* webpackChunkName: "Checkout" */ "./components/Сheckout/Сheckout"))
const Basket = lazy(() => import(/* webpackChunkName: "Basket" */ "./components/Сheckout/Basket"))

function App() {
    const [basketPopupOpen, setBasketPopupOpen] = useState(false)
    const [loginPopupOpen, setLoginPopupOpen] = useState(false)
    const location = useLocation()
    const size = useResize()
    const overlayExists = location.pathname !== '/Checkout' || size.width <= 768

  return (
          <div className="wrapper">
                  <Header setBasketPopupOpen={setBasketPopupOpen} setLoginPopupOpen={setLoginPopupOpen}/>
              {overlayExists   && <div className={basketPopupOpen ? `${style.overlay} ${style.overlayVisible}` : style.overlay}>
                  <Suspense fallback={<div>loading...</div>}>
                      <Basket setBasketPopupOpen={setBasketPopupOpen}/>
                  </Suspense>
              </div> }
              <LoginPopup loginPopupOpen={loginPopupOpen} setLoginPopupOpen={setLoginPopupOpen}/>
                  <main className="main">
                    <Routes>
                        <Route path='/*'  element={
                            <StartPage/> }/>
                        <Route path='/Category/*'  element={
                                <Selection/> }/>
                        <Route path='/Product/:id'  element={
                            <Suspense fallback={<div>loading...</div>}>
                                <ProductPage/>
                            </Suspense>
                             }/>
                        <Route path='/Profile/*'  element={
                            <Suspense fallback={<div>loading...</div>}>
                                <Profile/>
                            </Suspense>
                             }/>
                        <Route path='/Favorites/*'  element={
                            <Suspense fallback={<div>loading...</div>}>
                                <Favorites/>
                            </Suspense>
                        }/>
                        <Route path='/Checkout/*'  element={
                            <Suspense fallback={<div>loading...</div>}>
                                <Checkout/>
                            </Suspense>
                             }/>
                    </Routes>
                  </main>
                  <Footer/>
          </div>
  )
}

export default App;
