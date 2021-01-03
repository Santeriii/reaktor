import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/Navbar'

export const App = () => {
    return (
        <Router>
            <NavBar />
        </Router>
    )
}