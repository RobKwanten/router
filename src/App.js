import React from 'react';
import './App.css';
import Nav from './components/nav'
import About from './components/about'
import Shop from './components/shop'
import Contact from './components/contact'
import Home from './components/home'
import Footer from './components/footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>App</h1>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/contact" component={Contact}/>
        </Switch> 
        <Footer/>   
      </div>
    </Router>
    
  );
}

export default App;
