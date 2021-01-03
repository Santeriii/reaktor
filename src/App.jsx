import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/Navbar'
import Gloves from './components/Gloves'
import Beanies from './components/Beanies'
import Facemasks from './components/Facemasks'

export const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/gloves">
                    <Gloves />
                </Route>
                <Route path="/beanies">
                    <Beanies />
                </Route>
                <Route path="/facemasks">
                    <Facemasks />
                </Route>
            </Switch>
        </Router>
    )
}