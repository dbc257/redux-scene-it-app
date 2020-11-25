import { Grid, Typography} from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import SearchForm from '../components/SearchForm'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { makeStyles } from '@material-ui/core/styles';

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
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Link to="/favorites">
        <BottomNavigation 
        showLabels 
        value={value}
        className={classes.nav}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        >
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>} />
        </BottomNavigation>
      </Link> 
      <br/>
      <Typography variant="h1" align="center">My Favorite Movie!</Typography>
      <br/>
      <SearchForm />
      <br/>
      <br/>
      <div className={classes.root}>
      <Grid container spacing={3}>
        { movies.map(movie => {
          return (
          <MovieCard movie={movie} key={movie.imdbID} />
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
