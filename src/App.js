import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import './App.css';
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Selection from "./components/Selection/Selection";
import Checkout from "./components/Сheckout/Сheckout";
import Favorites from "./components/Favorites/Favorites";
import StartPage from "./components/StartPage/StartPage";
import { useSelector, useDispatch } from 'react-redux'

function App() {
    const [basketItem, setBasketItem] = useState([])
    const dispatch = useDispatch()
    const {favorites} = useSelector(state => state.favoritesReducer)

    const getBasketItem = () => {
        return (
            axios.get('https://644146b5792fe886a8a31f8c.mockapi.io/checkout').then(res => {
                setBasketItem(res.data)
            })
        )
    }


    useEffect(() => {
        getBasketItem()
    }, [])


    let addBasketItem = ({item}) => {
        if(basketItem.every(i=> i.id !== item.id)){
            axios.post('https://644146b5792fe886a8a31f8c.mockapi.io/checkout', item).then( res =>
                getBasketItem()
            )
        }
    }

    let removeBasketItem = (id, number) => {
        axios.delete(`https://644146b5792fe886a8a31f8c.mockapi.io/checkout/${number}`)
        setBasketItem((prev) => prev.filter(item => item.id !== id))
    }

    let clickToFavorites = (el) => {
        if(favorites.every(i=> i.id !== el.item.id)){
            axios.post('https://64523a52a2860c9ed4057faf.mockapi.io/favorites', el.item).then( res => {}
            // функция дать фаворитов
            )
        }else{
            let number = "";
            favorites.forEach(item => {
                if(item.id === el.item.id){
                    number = item.number
                }
            })
            axios.delete(`https://64523a52a2860c9ed4057faf.mockapi.io/favorites/${number}`)
            setFavorites((prev) => prev.filter(item => item.id !== el.item.id))
        }
    }

  return (
          <div className="wrapper">
                  <Header/>
                  <main className="main">
                    <Routes>
                        <Route path='/*'  element={
                            <StartPage/> }/>
                        <Route path='/Category/*'  element={
                            <Selection basketItem={basketItem} favorites={favorites} addBasketItem={addBasketItem} clickToFavorites={clickToFavorites}/> }/>
                        <Route path='/Favorites/*'  element={
                            <Favorites favorites={favorites} clickToFavorites={clickToFavorites} basketItem={basketItem} addBasketItem={addBasketItem} /> }/>
                        <Route path='/Checkout/*'  element={
                            <Checkout basketItem={basketItem} setBasketItem={setBasketItem} removeBasketItem={removeBasketItem}/> }/>
                    </Routes>
                  </main>
                  <Footer/>
          </div>
  )
}

export default App;
