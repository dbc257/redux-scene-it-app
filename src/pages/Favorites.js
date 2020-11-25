import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { makeStyles } from '@material-ui/core/styles';

export default function Favorites() {
  const movies = useSelector((state) => state.favorites)
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      height: 56,
      backgroundColor: 'inherit'
    },
  });
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Link to="/">
        <BottomNavigation 
        showLabels
        value={value}
        className={classes.nav}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </BottomNavigation>
      </Link>
      <br/>
      <Typography variant="h1" align="center">My Favorites</Typography>
      <br/>
      <br/>
      <br/>
      <div className={classes.root}>
        <Grid container spacing={3}>
          { movies.map(movie => {
            return (
                <MovieCard movie={movie} key={movie.imdbID}/>
            )
          }) }
        </Grid>
      </div>
      <br/>
      <br/>
      <br/>
    </>
  )
}
