import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Container } from '../components/navbar/container'
import { HomeScreen } from '../components/Screens/HomeScreen'
import { PhotosScreen } from '../components/Screens/PhotosScreen'
import { UserScreen } from '../components/Screens/UserScreen'
import { TodoAppScreen } from '../components/Screens/TodoAppScreen'
import { GiphyScreen } from '../components/Screens/GiphyScreen'
import { StarsWarScren } from '../components/Screens/StarsWarScren'
import { ContacScreen } from '../components/Screens/ContacScreen'

export const DashBoardRouters = () => {
  return (
        <>
            <Container />

                <Switch>

                <Route  exact path="/home" component={ HomeScreen } />
                <Route  exact path="/photos" component={ PhotosScreen } />
                <Route  exact path="/todoapp" component={ TodoAppScreen } />
                <Route  exact path="/giphy" component={ GiphyScreen } />
                <Route  exact path="/stars" component={ StarsWarScren } />
                <Route  exact path="/user" component={ UserScreen } />
                <Route  exact path="/contact" component={ ContacScreen } />

                <Redirect to="/login" />

                </Switch>

        </>
  )
}
