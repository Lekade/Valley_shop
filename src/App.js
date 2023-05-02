import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import './App.css';
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Selection from "./components/Selection/Selection";
import Checkout from "./components/Сheckout/Сheckout";
import {useState} from "react";



function App() {

    const [items, setItems] = useState([]);
    const [basketItem, setBasketItem] = useState([])

    const getBasketItem = () => {
        return (
            axios.get('https://644146b5792fe886a8a31f8c.mockapi.io/checkout').then(res => {
                setBasketItem(res.data)
            })
        )
    }

    React.useEffect(() => {
        axios.get('https://644146b5792fe886a8a31f8c.mockapi.io/items').then(res => {
            setItems(res.data)
        })
        getBasketItem()
    }, [])


    let addBasketItem = (item) => {
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

  return (
          <div className="wrapper">
                  <Header/>
                  <main className="main">
                    <Routes>
                        <Route path='/*'  element={
                            <Selection items={items} basketItem={basketItem} addBasketItem={addBasketItem}/> }/>
                        <Route path='/Checkout/*'  element={
                            <Checkout basketItem={basketItem} setBasketItem={setBasketItem} removeBasketItem={removeBasketItem}/> }/>
                    </Routes>
                  </main>
                  <Footer/>
          </div>
  )
}

export default App;
