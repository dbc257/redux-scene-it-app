import { AppBar, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import React from 'react';


export default function NavBar() {
    return (
        <AppBar position="static">
                <Typography variant="h6" >
                    <NavLink to="/">
                        Home
                    </NavLink>
                </Typography>
                <Typography variant="h6" >
                    <NavLink to='/favorites'>
                        Favorites
                    </NavLink>
                </Typography>
        </AppBar>
    )
}
