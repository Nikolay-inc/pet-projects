import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './Header/Header';
import Rate from './Rate/Rate';
import Footer from './Footer/Footer';
import About from './About/About';

class App extends React.Component {

  render() {
    return (
      <div className='site'>
        
        <Header />

        <div className="main-container">
          <main>

            <Router>
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route exact path="/about" component={About} />
              </Switch>
            </Router>
            
          </main>
        </div>

        <div className="container" id="cookie-info">
          <div className="site-content">
            <div className="well">
              Sorry, but we need to use Cookies on our website to get the information about you.<br />
              Also we get your region id and your current location.
              <button href="#" className="btn" onClick={this.hideCookie} >OK</button>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    )
  }
}

export default App;
