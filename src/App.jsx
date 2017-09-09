import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Error404 from './pages/Error404';

// Here comes App specific stuff from client and server
// (Provider, etc)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
