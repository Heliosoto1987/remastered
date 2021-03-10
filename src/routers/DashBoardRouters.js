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
import { ThanksScreen } from '../components/Screens/ThanksScreen'
import { ProjectScreen } from '../components/Screens/ProjectScreen'

export const DashBoardRouters = () => {
  return (
        <>
            <Container />

                <Switch>

                <Route  exact path="/thanks" component={ ThanksScreen } />
                <Route  exact path="/home" component={ HomeScreen } />
                <Route  exact path="/photos" component={ PhotosScreen } />
                <Route  exact path="/todoapp" component={ TodoAppScreen } />
                <Route  exact path="/giphy" component={ GiphyScreen } />
                <Route  exact path="/stars" component={ StarsWarScren } />
                <Route  exact path="/user" component={ UserScreen } />
                <Route  exact path="/contact" component={ ContacScreen } />
                <Route  exact path="/projects" component={ ProjectScreen }/>

                <Redirect to="/login" />

                </Switch>

        </>
  )
}
