import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import './App.css';
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Selection from "./components/Selection/Selection";
import Checkout from "./components/Сheckout/Сheckout";
import {useState} from "react";
import Favorites from "./components/Favorites/Favorites";



function App() {

    const [items, setItems] = useState([]);
    const [basketItem, setBasketItem] = useState([])
    const [favorites, setFavorites] = useState([])

    const getBasketItem = () => {
        return (
            axios.get('https://644146b5792fe886a8a31f8c.mockapi.io/checkout').then(res => {
                setBasketItem(res.data)
            })
        )
    }

    const getFavoritesItem = () => {
        return (
            axios.get('https://64523a52a2860c9ed4057faf.mockapi.io/favorites').then(res => {
                setFavorites(res.data)
            })
        )
    }

    React.useEffect(() => {
        axios.get('https://644146b5792fe886a8a31f8c.mockapi.io/items').then(res => {
            setItems(res.data)
        })
        getBasketItem()
        getFavoritesItem()
    }, [])


    let addBasketItem = ({item}) => {
        if(basketItem.every(i=> i.item.id !== item.item.id)){
            axios.post('https://644146b5792fe886a8a31f8c.mockapi.io/checkout', item).then( res =>
                getBasketItem()
            )
        }
    }

    let removeBasketItem = (id, label) => {
        axios.delete(`https://644146b5792fe886a8a31f8c.mockapi.io/checkout/${label}`)
        setBasketItem((prev) => prev.filter(item => item.item.id !== id))
    }

    let clickToFavorites = (el) => {
        if(favorites.every(i=> i.item.id !== el.item.item.id)){
            axios.post('https://64523a52a2860c9ed4057faf.mockapi.io/favorites', el.item).then( res =>
                getFavoritesItem())
        }else{
            axios.delete(`https://64523a52a2860c9ed4057faf.mockapi.io/favorites/${el.item.label}`)
            setFavorites((prev) => prev.filter(item => item.item.id !== el.item.item.id))
        }
    }


  return (
          <div className="wrapper">
                  <Header/>
                  <main className="main">
                    <Routes>
                        <Route path='/*'  element={
                            <Selection items={items} basketItem={basketItem} favorites={favorites} addBasketItem={addBasketItem} clickToFavorites={clickToFavorites}/> }/>
                        <Route path='/Checkout/*'  element={
                            <Checkout basketItem={basketItem} setBasketItem={setBasketItem} removeBasketItem={removeBasketItem}/> }/>
                        <Route path='/Favorites/*'  element={
                            <Favorites favorites={favorites} clickToFavorites={clickToFavorites} basketItem={basketItem} addBasketItem={addBasketItem} /> }/>
                    </Routes>
                  </main>
                  <Footer/>
          </div>
  )
}

export default App;
