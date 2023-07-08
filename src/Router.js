import React from 'react';
import { Switch,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

export default function Router() {
  return (
    <div>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
        </Switch>
    </div>
  )
}

