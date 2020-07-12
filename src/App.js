import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import TinyEditor from './tinyeditor'
import CodeExample from './codeexample/code'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={TinyEditor} />
          <Route exact path="/tinyEditor" component={TinyEditor} />
          <Route exact path="/code" component={CodeExample} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
