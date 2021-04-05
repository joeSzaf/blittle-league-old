import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import getCurrentUser from "../services/getCurrentUser"
import "../assets/scss/main.scss"
import RegistrationForm from "./registration/RegistrationForm"
import SignInForm from "./authentication/SignInForm"
import TopBar from "./layout/TopBar"
import BottomBar from "./layout/BottomBar"
import HomePage from "./pages/HomePage"

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#ffef62',
      main: '#ffeb3b',
      dark: '#b2a429',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffef62',
      main: '#ffeb3b',
      dark: '#b2a429',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 'Lora, serif',
    fontColor: 'white'
  },
})

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined)
  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setCurrentUser(user)
      })
      .catch(() => {
        setCurrentUser(null)
      })
  }, [])
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <TopBar user={currentUser} />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/users/new" component={RegistrationForm} />
          <Route exact path="/user-sessions/new" component={SignInForm} />
        </Switch>
        <BottomBar />
      </ThemeProvider>
    </Router>
  )
}

export default hot(App)
