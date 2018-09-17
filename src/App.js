import React, { Component } from 'react';
import HeaderF from './components/header-f';
import MainF from './components/main-f';
import TableF from './components/table-f';
import FooterF from './components/footer-f';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="fd-ui fd-ui--fundamental">
          <HeaderF></HeaderF>

          <Switch>
            <Route path={'/'} component={MainF} exact/>
            <Route path={'/'} component={TableF} />
          </Switch>
          <FooterF></FooterF>
        </div>
      </Router>
    );
  }
}

export default App;
