import './App.css';
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Selection from "./components/Selection/Selection";
import Checkout from "./components/Сheckout/Сheckout";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
        <Checkout/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
