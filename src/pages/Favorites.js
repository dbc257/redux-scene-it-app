import { Grid, Typography, Fab } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import MovieCard from '../components/MovieCard'
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import HomeIcon from '@material-ui/icons/Home';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
import { makeStyles } from '@material-ui/core/styles';
import MovieCardLightTheme from '../components/components.MovieCard/MovieCardLightTheme'
import MovieCardDarkTheme from '../components/components.MovieCard/MovieCardDarkTheme'
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

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
  // const [value, setValue] = React.useState(0);
  const themeContext = useContext(ThemeContext);

  return (
    <>
      {/* <Link to="/">
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
      </Link> */}
      <br/>
      <br/>
      <Typography variant="h2" align="center">My Favorites!</Typography>
      <br/>
      <br/>
      <br/>
      <div className={classes.root}>
        <Grid container spacing={3}>
          { themeContext.lightMode ? ( 
        movies.map(movie => {
          return (
          <MovieCardLightTheme movie={movie} key={movie.imdbID} />
          )
        }) 
      ) : (
        movies.map(movie => {
          return (
          <MovieCardDarkTheme movie={movie} key={movie.imdbID} />
          )
        }) 
      )}
        </Grid>
      {/* <Link to="/"><Fab
      color='primary'
      // variant="container"
      style={{ position: 'fixed', bottom: '20px', right: '20px', fontSize: '30px' }}
      >🏠</Fab></Link>   */}
      { themeContext.lightMode ? ( 
      <Link to="/">   
        <Fab
          color='primary'
          style={{ position: 'fixed', bottom: '20px', right: '20px', fontSize: '30px' }}
        >🏠</Fab>
      </Link> 
      ) : (  
      <Link to="/">     
        <Fab
        color='primary'
        style={{ position: 'fixed', bottom: '20px', right: '20px', fontSize: '30px' }}
        >🏠</Fab>
      </Link>  
      ) }
      </div>
      <br/>
      <br/>
      <br/>
    </>
  )
}

