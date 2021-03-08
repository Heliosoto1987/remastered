import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { LoginScreen } from '../components/Screens/LoginScreen'
import { DashBoardRouters } from './DashBoardRouters'

import '../styles/approuter.css'

export const AppRouter = () => {
  return (
        <Router>
            <div>

                  <Switch>

                      <Route exact path="/login" component={ LoginScreen } />
                      <Route path="/" component={ DashBoardRouters } />
                      
                  </Switch>
            </div>
          </Router>
  )
}
