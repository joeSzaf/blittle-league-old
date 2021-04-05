import React from "react"
import { Link } from "react-router-dom"
import SignOutButton from "../authentication/SignOutButton"

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import SportsBaseball from '@material-ui/icons/SportsBaseball'

const useStyles = makeStyles((theme) => ({
  topBar: {
    backgroundColor: '#222222',
    fontColor: '#FFFFFF',
    padding: theme.spacing(1),
  },
  title: {
    padding: theme.spacing(1),
  },
}))

const TopBar = ({ user }) => {
  const classes = useStyles()

  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="button">
        Sign Up
      </Link>
    </li>,
  ]

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ]

  return (
    <div>
      <AppBar position="fixed" className={classes.topBar}>
        <Container maxWidth="lg">
          <Toolbar>
            <SportsBaseball fontSize="large" color="action" />
            <Typography variant="h4" className={classes.title} color="textPrimary" noWrap>
              Blittle League
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </div>
    

    // <div className="top-bar">
    //   <div className="top-bar-left">
    //     <ul className="menu">
    //       <li className="menu-text">App</li>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="top-bar-right">
    //     <ul className="menu">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
    //   </div>
    // </div>
  )
}

export default TopBar
