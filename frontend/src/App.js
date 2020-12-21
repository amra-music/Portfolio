import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home/index';
import About from 'pages/About/index.js';
import Contact from 'pages/Contact/index.js';
import PageNotFound from 'pages/PageNotFound/index.js';
import Footer from 'components/Footer/index.js';
import Navbar from 'components/Navbar/index';


const App = () => {
  return (
    <div className='page-container'>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
