
import { React } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import { CartProvider } from './CartContext';

import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Apple from './pages/APPLE/Apple';
import Store from './pages/Cart/Cart';
import Categories from './pages/Categories/Categories';
import HP from './pages/HP/HP';
import Home from './pages/Home/Home';
function App() {
  return (
    <div className="app">
      <CartProvider>
      <Router>
          <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/categories" component={Categories}/>
              <Route path="/hp" component={HP}/>
              <Route path="/apple" component={Apple}/>
              <Route path="/carts" component={Store}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
            <Footer/>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
