import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import NavigationBar from './components/NavigationBar.js'
import Footer from './components/Footer.js';


function App() {
  return (
    <React.Fragment>
      <div className='page-container'>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
