import './App.css';
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Selection from "./components/Selection/Selection";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
        <Selection/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
