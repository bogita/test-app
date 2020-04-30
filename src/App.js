import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import Header from './components/header/header'
import Footer from './components/footer/footer'
import TableWrapper from './components/table-wrapper/table-wrapper'
import Home from './components/home/home'

import './App.css';

function App() {
  return (
    <div className="App">
         <Router>
           
          <Header />
          
          <div className="container">

            <Switch>

              <Route exact path="/" component={() => <Home /> }/>
              <Route exact path="/table-one" component={() => <TableWrapper name="Table One" type="one"/> }/>
              <Route exact path="/table-two" component={() => <TableWrapper name="Table Two" type="two" /> }/>

            </Switch>

          </div>

        </Router>

        <Footer />
    </div>
  );
}

export default App;
