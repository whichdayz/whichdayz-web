import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Default } from '../screens'


export const Routes = () => {
    return (
        <Switch>
            {/* Home Page */}
            <Route exact path='/' component={Home}/>
            {/* Team Page */}
            {/* <Route exact path='/team' component={Team}/> */}
            {/* Page not found */}
            <Route component={Default}/>
        </Switch>
    )
}
