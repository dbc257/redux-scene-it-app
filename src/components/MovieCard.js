import { Link, Grid, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../redux/actions';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
// import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
import MovieCardLightTheme from './components.MovieCard/MovieCardLightTheme'
import MovieCardDarkTheme from './components.MovieCard/MovieCardDarkTheme'

const useClasses = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexGrow: '1'    
  },
  content: {
    textAlign: 'center',
    justifyContent: 'center'
  },
  poster: {
    flex: '0 0 500px',
  },
  favbutton: {
    alignSelf: 'center'
  }
})

export default function MovieCard(props) {
  const classes = useClasses();
  const { Title, Year, Poster } = props.movie;
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.favorites);

  const foundMovie = movies.find((movie) => movie.imdbID === props.movie.imdbID)

  const handleAddMovie = () => {
    dispatch(addFavorite(props.movie))
  }

  const handleRemoveMovie = () => {
    dispatch(deleteFavorite(props.movie.imdbID))
  }

  const [value, setValue] = React.useState(0);
  const themeContext = useContext(ThemeContext);

  return (
  
  <Grid item xs={12} sm={6} md={4} lg={4}>
  { themeContext.lightMode && foundMovie ? (
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
  )
}