import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles/App.css';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Error404 from './pages/Error404';

import Header from './shared/Header';

// Here comes App specific stuff from client and server
// (Provider, etc)

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
