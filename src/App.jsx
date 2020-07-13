import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainNavbar from './components/navbar/MainNavbar';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom'
import Footer from './components/footer/Footer';
import PageQuotes from './components/pages/pageQuotes/PageQuotes';

function App() {
  return (
    <Router>
      <div className="App">
        
        <MainNavbar />

        <main className="container-fluid" style={{
          width : '100vw',
          height : '100vh',
          display : 'flex',
          justifyContent : 'center',
          alignItems : 'center',
        }}>
          <Switch>

            <Route path='/note'>
              <h3>Note</h3>
            </Route>

            <Route path='/'>
              <PageQuotes />
            </Route>

          </Switch>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
