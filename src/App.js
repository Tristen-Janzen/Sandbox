import React, { Component } from 'react';
//npm install -S react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import Tic from './Tic';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

class App extends Component {
  render() {
    
    return (
      
    <Router>
      <HeaderComponent/>
        <div>
        
          <h2>Contents</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/home'} className="nav-link"> Home </Link></li>
            <li><Link to={'/form'} className="nav-link">Form</Link></li>
            <li><Link to={'/tic'} className="nav-link">Tic</Link></li>

          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/home' component={Home} />
              <Route path='/form' component={Form} />
              <Route path='/tic' component={Tic} />
          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;