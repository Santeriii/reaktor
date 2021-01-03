import React from 'react'

import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 10px black',
        fontSize: '240%',
        fontFamily: 'sans',
        marginRight: '1%',
    },
    button_text: {
        textDecoration: 'none',
        color: 'black',
        textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',
        fontSize: '80%',
        fontFamily: 'Comic Sans MS, Comic Sans, cursive',
        letterSpacing: '1px',
    },
    appBar: {
        backgroundColor: 'black'
    },
    appBarMobile: {
        backgroundColor:
            'black',
        float: 'none',
        display: 'block',
        textAlign: 'left',
    },
    itemAlignMobile: {
        float: 'none',
        display: 'block',
        textAlign: 'left',
    },
    mobileButton_text: {
        textDecoration: 'none',
        color: 'black',
        textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',
        fontSize: '80%',
        fontFamily: 'Arvo',
        fontWeight: 'bold',
        letterSpacing: '1px',
    },
}))

export default function Navbar() {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 701px)' })

    return (
        <div className={classes.root}>
            {isBigScreen && 
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Link to="/gloves" className={classes.link}>
                        <Button
                            data-cy="glovesNav"
                            color="inherit"
                            className={classes.button_text}>
                            Gloves
                        </Button>
                    </Link>

                    <Link to="/facemasks" className={classes.link}>
                        <Button
                            data-cy="facemasksNav"
                            color="inherit"
                            className={classes.button_text}>
                            Facemasks
                        </Button>
                    </Link>

                    <Link to="/beanies" className={classes.link}>
                        <Button
                            data-cy="beaniesNav"
                            color="inherit"
                            className={classes.button_text}>
                            Beanies
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
            }
            {isTabletOrMobile &&
            <AppBar position="static" className={classes.appBarMobile}>
                <Toolbar className={classes.itemAlignMobile}>
                    <Link to="/gloves" className={classes.link}>
                        <Button
                            data-cy="glovesNav"
                            color="inherit"
                            className={classes.button_text}>
                            Gloves
                        </Button>
                    </Link>

                    <Link to="/facemasks" className={classes.link}>
                        <Button
                            data-cy="facemasksNav"
                            color="inherit"
                            className={classes.button_text}>
                            Facemasks
                        </Button>
                    </Link>

                    <Link to="/beanies" className={classes.link}>
                        <Button
                            data-cy="beaniesNav"
                            color="inherit"
                            className={classes.button_text}>
                            Beanies
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
            }
        </div>
    )
}
