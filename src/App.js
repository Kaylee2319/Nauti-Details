import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
// import About from './components/About';
// import Contact from './components/ContactMe';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route exact path="/about" component={About} /> */}
          {/* <Route exact path="/contact" component={Contact} /> */}
        </Switch>
      </BrowserRouter>
  );
}

export default App;