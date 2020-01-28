import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import './App.scss'
import { useDispatch } from 'react-redux'
import HomePage from './page/home/HomePage'
import { Action } from './core/Action'
import { AppAction } from './AppState'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default function App() {
    const dispatch = useDispatch()
    dispatch(Action.Create(AppAction.REQUEST_LOAD_APP_CONFIG))

    return (
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
                <HomePage />
                <Copyright />
            </Box>
        </Container>
    )
}
