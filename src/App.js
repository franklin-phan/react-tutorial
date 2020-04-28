
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList'
import { HashRouter as Router, Route } from 'react-router-dom'
import About from './About'
import POPOSDetails from './POPOSDetails'
import Footer from './footer'

function App() {
  return (
    <Router>
    <div className="App">
      <Title />
      <Route exact path="/" component={POPOSList}/>
      <Route path="/about" component={About} />
      <Route path="/details/:id" component={POPOSDetails} />
      <Footer name="Franklin Phan" year="2020"/>
    </div>
    </Router>
  );
}

export default App;
