import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom'
import './App.scss'
import { useDispatch } from 'react-redux'
import HomePage from './page/home/HomePage'
import { Action } from './core/Action'
import { AppAction } from './AppState'
import Topics from './page/topic/Topics'
import AboutPage from './page/about/AboutPage'

export default function App() {
    const dispatch = useDispatch()
    dispatch(
        Action.Create(AppAction.REQUEST_GET_APP_CONFIG, {
            url: process.env.REACT_APP_CONFIG,
        }),
    )

    return (
        
                <Router>
                    <Container maxWidth="sm">
            <Box my={4}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    align="center"
                >
                    React Seed
                </Typography>
  
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      
        </Box>
        </Container>
    </Router>
  
    )
}
