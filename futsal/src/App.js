import React from 'react';
import Financial from './pages/Financial';
import History from './pages/History';
import Home from './pages/Home';
import Login from './pages/Login';
import Match from './pages/Match';
import Settings from './pages/Settings';
import Stats from './pages/Stats';
import { Route, Switch } from 'react-router-dom';

export default function App() {
    return (
      <main>
        <Switch>
          <Route path="/financial" component={ Financial } />
          <Route path="/history" component={ History } />
          <Route path="/home" component={ Home } />
          <Route path="/match" component={ Match } />
          <Route path="/settings" component={ Settings } />
          <Route path="/stats" component={ Stats } />
          <Route path="/" component={ Login } exact />
        </Switch>
      </main>
    );
}
