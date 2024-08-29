import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Provider'ı import edin
import store from './store'; // Store'u import edin
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import CartPage from './pages/CartPage/CartPage';
import ColdDrinksPage from './pages/ColdDrinksPage/ColdDrinksPage'; 
import FruitsPage from './pages/FruitsPage/FruitsPage';
import HotDrinksPage from './pages/HotDrinksPage/HotDrinksPage';
import SnackPage from './pages/SnackPage/SnackPage'; 
import WaterPage from './pages/WaterPage/WaterPage';
import SodaWaterPage from './pages/SodaWaterPage/SodaWaterPage'; 
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Provider store={store}> {/* Provider ile store'u sağla */}
      <Router>
        <div className="App">
          <Header /> {/* Header bileşenini ekle */}
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cold-drinks" element={<ColdDrinksPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/hot-drinks" element={<HotDrinksPage />} />
              <Route path="/new-category" element={<FruitsPage />} />
              <Route path="/snacks" element={<SnackPage />} />
              <Route path="/water" element={<WaterPage />} />
              <Route path="/soda" element={<SodaWaterPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
