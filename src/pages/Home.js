import { Grid, Typography, Fab} from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import MovieCard from '../components/MovieCard'
import SearchForm from '../components/SearchForm'
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
import { makeStyles } from '@material-ui/core/styles';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
// import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
// import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import MovieCardLightTheme from '../components/components.MovieCard/MovieCardLightTheme'
import MovieCardDarkTheme from '../components/components.MovieCard/MovieCardDarkTheme'

export default function Home() {
  const movies = useSelector((state) => state.results)
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
      {/* { themeContext.lightMode ? ( 
      <Link to="/favorites">
        <BottomNavigation 
        showLabels 
        value={value}
        className={classes.nav}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        >
           <BottomNavigationAction variant="container" label="Favorites" icon={<FavoriteIcon color="primary"/>} />
        </BottomNavigation>
      </Link> 
      ) : (
      <Link to="/favorites">
        <BottomNavigation 
        showLabels 
        value={value}
        className={classes.nav}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        >
          <BottomNavigationAction color="secondary" label="Favorites" icon={<FavoriteIcon color="secondary"/>} />
        </BottomNavigation>
      </Link> 
      )} */}
      <br/> 
      <br/> 
      <br/> 
      <Typography variant="h2" align="center">My Favorite Movie!</Typography>
      <br/>
      <SearchForm />
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
      {/* <Link to="/favorites"><Fab
        // color='primary'
        style={{ position: 'fixed', bottom: '20px', right: '20px', fontSize: '30px' }}
      >❤️</Fab></Link> */}
      { themeContext.lightMode ? ( 
      <Link to="/favorites">   
        <Fab
          color='primary'
          style={{ position: 'fixed', bottom: '20px', right: '20px', fontSize: '30px' }}
        >😻</Fab>
      </Link> 
      ) : (  
      <Link to="/favorites">     
        <Fab
        color='primary'
        style={{ position: 'fixed', bottom: '20px', right: '20px', fontSize: '30px' }}
        >😻</Fab>
      </Link>  
      ) }
      </div>
      <br/>
      <br/>
      <br/>
    </>
  )
}
