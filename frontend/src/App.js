import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Project1 from './pages/projects/Project1.js';
import Project2 from './pages/projects/Project2.js';
import Project3 from './pages/projects/Project3.js';
import Project4 from './pages/projects/Project4.js';
import NavigationBar from './components/NavigationBar.js';
import Footer from './components/Footer.js';


function App() {
  return (
      <div className='page-container'>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/battleship" component={Project1}/>
            <Route path="/webApp" component={Project2}/>
            <Route path="/augumentedReality" component={Project3}/>
            <Route path="/paymentServer" component={Project4}/>
          </Switch>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
